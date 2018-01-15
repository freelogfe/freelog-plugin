'use babel';
import $ from 'jquery';
import _ from 'underscore';
import fstools from  './functional-tools';
import DownloadView from './download-view';
import UploadView from './upload-view';PolicyUploadView
import PolicyUploadView from './policy-upload-view';
import LoginView from './login-view'
import { CompositeDisposable } from 'atom';
import request  from 'request';
import debug  from 'request-debug';
import defaultJSON from '../defaultUploadJSON';
import fs from 'fs';
//监听request的network
debug(request);
export default {
    subscriptions: null,
    panels:[],
    activate(state) {
        // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
        this.subscriptions = new CompositeDisposable();
        // Register commands
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'Freelog:login': (e) => this.showPanel(e),
            'Freelog:policy-upload': (e) => this.showPanel(e),
            'Freelog:md-upload': (e) => this.showPanel(e),
            'Freelog:md-download': (e) => this.showPanel(e),
            'Freelog:beautify': (e) => this.beautify(e),
        }));
    },
    deactivate() {
        //不一定每个view都已经生成
        try {
            this.loginView.destroy();
            this.uploadView.destroy();
            this.downloadView.destroy();
        } catch(e) {
        }
        destroyEach(this.panels);
        this.subscriptions.dispose();
    },
    serialize() {},
    showPanel(e) {
        _.compose(this.closeBtnBinding.bind(this),
             fstools.dispatch(
                fstools.isas('Freelog:login', this.showLoginPanel.bind(this), this.loginBiding.bind(this) ),
                fstools.isas('Freelog:md-upload', this.showUploadPanel.bind(this), this.jwtBinding.bind(this) ),
                fstools.isas('Freelog:md-download', this.showDownloadPanel.bind(this), this.downloadBinding.bind(this) ),
                fstools.isas('Freelog:policy-upload', this.showPolicyUploadPanel.bind(this), this.policyUploadBinding.bind(this) ),
                // fstools.isas('Freelog-plugin:beautify', this.beautify)
            ))(e);
            //e的type是命令
    },
    showLoginPanel(e) {
        this.loginView = new LoginView();
        this.loginPanel = atom.workspace.addModalPanel({
            item: this.loginView.getElement(),
            visible: false
        });
        this.panels.push(this.loginPanel);
        this.loginPanel.show();
    },
    showUploadPanel(e) {
        var jwtFlag = this.checkjwt();
        if ( !jwtFlag ) {
            destroyEach(this.panels);
            return this.showPanel({'type': 'Freelog:login'});
        }
        //根据是否有jwt渲染view
        this.uploadView = new UploadView();
        this.uploadPanel = atom.workspace.addModalPanel({
            item: this.uploadView.getElement(),
            visible: false
        });
        $('#jwt-username').val(atom.config.get('freelog-plugin.username'));
        this.panels.push(this.uploadPanel);
        //显示panel
        this.uploadPanel.show();
    },
    showDownloadPanel() {
        if( !this.checkjwt() ) return atom.notifications.addError('Download error: please login first');
        this.downloadView = new DownloadView();
        this.downloadPanel = atom.workspace.addModalPanel({
            item: this.downloadView.getElement(),
            visible: false
        });
        this.panels.push(this.downloadPanel);
        this.downloadPanel.show();
    },
    showPolicyUploadPanel () {
      if( !this.checkjwt() ) return atom.notifications.addError('Download error: please login first');

      var jwtFlag = this.checkjwt();
      if ( !jwtFlag ) {
          destroyEach(this.panels);
          return this.showPanel({'type': 'Freelog:login'});
      }
      //根据是否有jwt渲染view
      this.uploadView = new PolicyUploadView();
      this.policyUploadPanel = atom.workspace.addModalPanel({
          item: this.uploadView.getElement(),
          visible: false
      });
      $('#jwt-username').val(atom.config.get('freelog-plugin.username'));
      $('#rencentUploadId').val(atom.config.get('freelog-plugin.rencentUploadId'));
      this.panels.push(this.policyUploadPanel);
      //显示panel
      this.policyUploadPanel.show();


    },
    checkjwt() {
        return atom.config.get('freelog-plugin.jwt');
    },
    //绑定登陆点击事件
    closeBtnBinding() {
        var self = this;
        $('.freelog-close-btn').off('click');
        $('.freelog-close-btn').on('click', (e)=>{
            e.preventDefault();
            destroyEach(self.panels);
        });
    },
    loginBiding() {
        $('#loginClk').off('click');
        $('#loginClk').on('click', ()=>{
            this.login.call(this);
        });
    },
    //绑定jwt上传点击事件
    jwtBinding() {
        //上传
        $('#jwtUploadClk').off('click');
        $('#jwtUploadClk').on('click', () => {
            this.startUpload(this.uploadPanel);
        });
        //清除jwt
        $('#logoutClk').off('click');
        $('#logoutClk').on('click', () => {
            this.logout.call(this);
        });
    },
    policyUploadBinding() {
//上传
      $('#policyUploadClk').off('click');
      $('#policyUploadClk').on('click', () => {
          this.startPolicyUpload(this.policyUploadPanel);
      });
      //清除jwt
      $('#logoutClk').off('click');
      $('#logoutClk').on('click', () => {
          this.logout.call(this);
      });
    },
    downloadBinding(){
        var self = this;
        $('#downloadClk').off('click');
        $('#downloadClk').on('click', () => {
            let resourceId = $('#download-resourceid').val();
            if(_.isEmpty( resourceId )) {
                return self.downloadView.setWarning('Please enter a resourceId');
            }
            self.startDownload.call( self,  resourceId );
        })
    },
    login () {
        var self = this;
        var username = $('#freelog-login-username').val(),
              password = $('#freelog-login-password').val();
        if (!( username && password )) {
            $('#loginMsg').html('Please enter usename or password.');
        }
        var body = JSON.stringify({
          loginName: username,
          password: password,
          jwtType: 'header'
        })
        $('#loginMsg').html('');
        request.post({
            url: 'http://api.freelog.com/v1/passport/login',
            headers: {
              'Content-Type': 'application/json'
            },
            body: body
        }, function optionalCallback(err, httpResponse, body) {
            var bodyJSON = JSON.parse(body);
            destroyEach(self.panels);
            if (err ) {
                return atom.notifications.addWarning('login failed: '+err);
            }
            if ( !( bodyJSON.errcode == 0 && bodyJSON.ret == 0 )  ) {
                return atom.notifications.addError('login failed: '+bodyJSON.msg);
            }
            //储存当前用户名及jwt
            atom.config.set('freelog-plugin.username', username);
            atom.config.set('freelog-plugin.jwt',httpResponse.headers.authorization);
            atom.notifications.addSuccess('login successfully!');
            // //显示panel
            // self.showPanel({'type': 'Free-log-mark-down:upload'});
        });
    },
    startUpload(panel) {
        atom.notifications.addSuccess('upLoad starting');
        let editor = atom.workspace.getActiveTextEditor(),
            uploadStr = editor.getText(),
            currentFilePath = atom.workspace.getActiveTextEditor().getPath(),
            formData = {
                // Pass data via Streams
                file: fs.createReadStream(currentFilePath),
                resourceType: 'markdown'
            };
        $.extend( defaultJSON, formData);
        let resourceName = $('#freelog-resource-name').val();
        if ( resourceName ) defaultJSON.resourceName = resourceName;
        request.post({
                headers : {
                    'authorization' : atom.config.get('freelog-plugin.jwt')
                },
                url:'http://api.freelog.com/v1/resources',
                formData: defaultJSON
            }, function optionalCallback(err, httpResponse, body) {
                let responsebody = JSON.parse(body);
                if (err)  return atom.notifications.addWarning('upload failed:');
                if ( !( responsebody.errcode == 0 &&  responsebody.ret ==0 ) ) {
                    panel.destroy();
                    return atom.notifications.addError('upload failed: '+responsebody.msg+ ' ' + responsebody.data, {dismissable: true});
                }
                //添加jwt
                atom.notifications.addSuccess('upLoad successful!, resourceId is :'+ responsebody.data.resourceId,  {dismissable: true});
                //存一个resource id
                atom.config.set('freelog-plugin.rencentUploadId', responsebody.data.resourceId);
                panel.destroy();
            });
    },
    startPolicyUpload(panel) {
      atom.notifications.addSuccess('upLoad starting');
      let compiler = require('freelog_policy_compiler');
      let editor = atom.workspace.getActiveTextEditor(),
          uploadStr = editor.getText(),
          formData = {
              "resourceId": $('#freelog-resource-id').val(),
              "policyText": btoa(uploadStr),
              "languageType": "freelog_policy_lang"
          };
    compiledObject = compiler.compile(uploadStr, 'beautify');
     if ( compiledObject.errorMsg ) {
         return atom.notifications.addWarning('grammar error: '+compiledObject.errorMsg);
     }

      request.post({
              headers : {
                  authorization : atom.config.get('freelog-plugin.jwt'),
                  'Content-Type': 'application/json'
              },
              url:'http://api.freelog.com/v1/resources/policies',
              body: JSON.stringify(formData)
          }, function optionalCallback(err, httpResponse, body) {
              let responsebody = JSON.parse(body);
              if (err)  return atom.notifications.addWarning('upload failed:');
              if ( !( responsebody.errcode == 0 &&  responsebody.ret ==0 ) ) {
                  panel.destroy();
                  return atom.notifications.addError('upload failed: '+responsebody.msg,  {dismissable: true});
              }
              //添加jwt
              atom.notifications.addSuccess('upLoad successful!, resourceId is :'+ responsebody.data.resourceId,  {dismissable: true});
              panel.destroy();
          });
    },
    startDownload(resourceId) {
        var self = this;
        request.get({
                headers : {
                    authorization : atom.config.get('freelog-plugin.jwt')
                },
                url:'http://api.freelog.com/v1/resources/'+resourceId+'.md'
            }, function optionalCallback(err, httpResponse, body) {
                destroyEach(self.panels);
                if (err)  return atom.notifications.addWarning('upload failed:',err);
                var bodyJSON = JSON.parse(body);
                atom.workspace.getActiveTextEditor().insertText(bodyJSON.data);
                atom.notifications.addSuccess('download successful!');
            });
    },
    logout() {
        destroyEach(this.panels);
        atom.config.set('freelog-plugin.jwt',null);
        atom.config.set('freelog-plugin.username', null);
    },
    beautify() {
        let compiler = require('freelog_policy_compiler');
        let editor = atom.workspace.getActiveTextEditor(),
             text = editor.getText(),
             compiledObject = compiler.compile(text, 'beautify');
        if ( compiledObject.errorMsg ) {
            return atom.notifications.addWarning('grammar error: '+compiledObject.errorMsg);
        }
        editor.setText(compiledObject.stringArray.splice(1).join(' ').replace(/\n\s/g,'\n'));
    }
};

function destroyEach( objs ) {
    _.each(objs, (el) => {
            el.destroy();
    });
}
