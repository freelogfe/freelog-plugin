let output = (function ( ) {
    let antlr4 = require('antlr4/index');
    //重写ErrorListener,储存报错信息
    var ErrorListener = require('antlr4/error/ErrorListener').ConsoleErrorListener;
    var errorMsg;
    ErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
        errorMsg = msg;
    };
    let policyLexer = require('../gen/policyLexer');
    let policyParser = require('../gen/policyParser');
    let policyListener = require('../gen/policyListener').policyListener;
    let _ = require('underscore');

    let JSONGenerator = function() {
      policyListener.call(this);
      this.indentLevel =4;
      this.result = [];
      //缩进
      this.nextIndent = '';
      //储存每一个code block
      this.objList = [];
      //当前code block
      this.obj = {};
      //当前用户对象
      this.userObj = {};
      return this;
    };

    function addIndent() {
    _.each(_.range(this.indentLevel), ()=>{
        this.nextIndent += ' ';
    });
}
JSONGenerator.prototype = Object.create(policyListener.prototype);
JSONGenerator.prototype.constructor = JSONGenerator;

// top levgel grammar p
JSONGenerator.prototype.enterP = function(ctx) {
};
JSONGenerator.prototype.exitP = function(ctx) {
};

// p由segments组成
JSONGenerator.prototype.enterSegment = function(ctx) {
    this.obj = {
        users : [],
        license: null,
        payments: null
    };
};
JSONGenerator.prototype.exitSegment = function(ctx) {
    console.log(JSON.stringify(this.obj));
    this.objList.push(this.obj);
    this.result.push('\n');
};

JSONGenerator.prototype.enterAudience_clause = function(ctx) {
    this.result.push('for');
    addIndent.apply(this)
};
JSONGenerator.prototype.exitAudience_clause = function(ctx) {
    this.result.push('\n'+this.nextIndent);
    this.nextIndent= this.nextIndent.slice(0,-4);
};

JSONGenerator.prototype.enterAudience_individuals_clause = function(ctx) {
    this.result.push('users');
    this.userObj = {};
    this.userObj.userType = 'individuals';
};

JSONGenerator.prototype.exitAudience_individuals_clause = function(ctx) {
};

JSONGenerator.prototype.enterAudience_groups_clause = function(ctx) {
    this.result.push('usergroups');
    this.userObj = {};
    this.userObj.userType = 'groups';
};
JSONGenerator.prototype.exitAudience_groups_clause = function(ctx) {
};

JSONGenerator.prototype.enterAudience_self_clause = function(ctx) {
    this.userObj = {};
    this.userObj.userType = 'self'
    this.result.push('self');
    this.obj.users? this.obj.users.push(this.userObj):  this.obj.users=[];
};
JSONGenerator.prototype.exitAudience_self_clause = function(ctx) {
};

JSONGenerator.prototype.enterAccess_clause = function(ctx) {
};
JSONGenerator.prototype.exitAccess_clause = function(ctx) {
    this.result.push('\n'+this.nextIndent);
};

JSONGenerator.prototype.enterAccess_clause = function(ctx) {
    // addIndent.apply(this)
    addIndent.apply(this)
};
JSONGenerator.prototype.exitAccess_clause = function(ctx) {
    this.nextIndent= this.nextIndent.slice(0,-4);
    this.result.push('\n');
};

JSONGenerator.prototype.enterConditional_access_clause = function(ctx) {
    // addIndent.apply(this)
    addIndent.apply(this)
    this.result.push('grant access on \n'+this.nextIndent)
};

JSONGenerator.prototype.exitConditional_access_clause = function(ctx) {
    this.nextIndent= this.nextIndent.slice(0,-4);
};

JSONGenerator.prototype.enterUnconditional_access_clause = function(ctx) {
    addIndent.apply(this)
    this.obj.license = null;
    this.obj.payments = null;
    this.result.push('require nothing');
};
JSONGenerator.prototype.exitUnconditional_access_clause = function(ctx) {
    this.nextIndent= this.nextIndent.slice(0,-4);
};


JSONGenerator.prototype.enterLicense_clause = function(ctx) {
    this.result.push('accepting');
};
JSONGenerator.prototype.exitLicense_clause = function(ctx) {
};

JSONGenerator.prototype.enterLicense_representation = function(ctx) {
    if (Object.getPrototypeOf(ctx.parentCtx).constructor.name == 'License_clauseContext') {
        this.result.push('license');
        this.result.push(ctx.children[1].getText() + '\n'+this.nextIndent);
        this.obj.license = this.obj.license|| [];
        this.obj.license.push(ctx.children[1].getText());
    }
};
JSONGenerator.prototype.exitLicense_clause = function(ctx) {
};

JSONGenerator.prototype.enterContract_clause = function(ctx) {
};
JSONGenerator.prototype.exitContract_clause = function(ctx) {
};

JSONGenerator.prototype.exitLicense_representation = function(ctx) {
};
//合约支付-时间
JSONGenerator.prototype.enterPayment_over_time = function(ctx) {
    var paymentObj = {
        price: null,
        unitGroup: null,
        unitType:null
    };
    this.result.push(ctx.PAYING().getText()); //paying
    this.result.push(ctx.INT()[0].getText());//first number
    paymentObj.price = Number(ctx.INT()[0].getText())
    this.result.push(ctx.PER().getText());
    if (ctx.INT()[1]) { //if second number exists
        this.result.push(ctx.INT()[1].getText());
        paymentObj.unitGroup = Number(ctx.INT()[1].getText())
    }
    this.result.push(ctx.time_unit().getText());//unit
    paymentObj.unitType = ctx.time_unit().getText();
    this.obj.payments = this.obj.payments || [];
    this.obj.payments.push(paymentObj);

};
JSONGenerator.prototype.exitPayment_over_time = function(ctx) {
};

//and
JSONGenerator.prototype.enterAnd = function(ctx) {
    this.result.push('and');
};
JSONGenerator.prototype.exitAnd = function(ctx) {
};



JSONGenerator.prototype.enterUsers = function(ctx) {
    //users ID
    this.userObj.users = this.userObj.users || [];
    if (Object.getPrototypeOf(ctx.parentCtx).constructor.name == 'Audience_individuals_clauseContext') {
        for(var i=0;i<ctx.getChildCount();i++) {
            if(ctx.getChild(i).getText() != ',') {
                this.userObj.users.push(ctx.getChild(i).getText());
            }
            this.result.push(ctx.getChild(i).getText());
        }
    }
    this.obj.users.push(this.userObj);

};
JSONGenerator.prototype.exitUsers = function(ctx) {
};

JSONGenerator.prototype.enterUser_groups = function(ctx) {
    this.userObj.users = this.userObj.users || [];
    for(var i=0;i<ctx.getChildCount();i++) {
        if(ctx.getChild(i).getText() != ',') {
            this.userObj.users.push(ctx.getChild(i).getText());
        }
        this.result.push(ctx.getChild(i).getText());
    }
    this.obj.users.push(this.userObj);
};
JSONGenerator.prototype.exitUser_groups = function(ctx) {
};


    // console.log(gen.result.join(' ').replace(/\n\s/g,'\n'));
    return function (input) {
        let chars = new antlr4.InputStream(input);
        let lexer = new policyLexer.policyLexer(chars);
        let tokens  = new antlr4.CommonTokenStream(lexer);
        let parser = new policyParser.policyParser(tokens);

        parser.buildParseTrees = true;
        let tree = parser.p();
        let gen = new JSONGenerator();
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(gen, tree);
        if(errorMsg) {
            return errorMsg;
        }
        return gen;
    }
})();

module.exports = {
    output: output
}
