// Generated from policy.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var policyListener = require('./policyListener').policyListener;
var grammarFileName = "policy.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001a\u0099\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0003\u0002\u0006\u0002*\n\u0002\r\u0002\u000e\u0002+\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u00046\n\u0004\f\u0004\u000e\u00049\u000b\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004",
    "@\n\u0004\f\u0004\u000e\u0004C\u000b\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004G\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007",
    "\u0005M\n\u0005\f\u0005\u000e\u0005P\u000b\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0007\u0006V\n\u0006\f\u0006\u000e\u0006Y\u000b",
    "\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0005\b_\n\b\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0007\rt\n\r\f\r\u000e\rw\u000b\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0005\u000e}\n\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u008a\n\u0012",
    "\f\u0012\u000e\u0012\u008d\u000b\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0007\u0013\u0092\n\u0013\f\u0013\u000e\u0013\u0095\u000b\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0002\u0002\u0015\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&\u0002",
    "\u0003\u0003\u0002\u0012\u0015\u0002\u0091\u0002)\u0003\u0002\u0002",
    "\u0002\u0004-\u0003\u0002\u0002\u0002\u0006F\u0003\u0002\u0002\u0002",
    "\bH\u0003\u0002\u0002\u0002\nQ\u0003\u0002\u0002\u0002\fZ\u0003\u0002",
    "\u0002\u0002\u000e^\u0003\u0002\u0002\u0002\u0010`\u0003\u0002\u0002",
    "\u0002\u0012f\u0003\u0002\u0002\u0002\u0014i\u0003\u0002\u0002\u0002",
    "\u0016l\u0003\u0002\u0002\u0002\u0018o\u0003\u0002\u0002\u0002\u001a",
    "x\u0003\u0002\u0002\u0002\u001c\u0080\u0003\u0002\u0002\u0002\u001e",
    "\u0082\u0003\u0002\u0002\u0002 \u0084\u0003\u0002\u0002\u0002\"\u0086",
    "\u0003\u0002\u0002\u0002$\u008e\u0003\u0002\u0002\u0002&\u0096\u0003",
    "\u0002\u0002\u0002(*\u0005\u0004\u0003\u0002)(\u0003\u0002\u0002\u0002",
    "*+\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002",
    "\u0002,\u0003\u0003\u0002\u0002\u0002-.\u0005\u0006\u0004\u0002./\u0005",
    "\u000e\b\u0002/\u0005\u0003\u0002\u0002\u000201\u0007\u0005\u0002\u0002",
    "17\u0005\b\u0005\u000223\u0005&\u0014\u000234\u0005\n\u0006\u000246",
    "\u0003\u0002\u0002\u000252\u0003\u0002\u0002\u000269\u0003\u0002\u0002",
    "\u000275\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u00028G\u0003\u0002",
    "\u0002\u000297\u0003\u0002\u0002\u0002:;\u0007\u0005\u0002\u0002;A\u0005",
    "\n\u0006\u0002<=\u0005&\u0014\u0002=>\u0005\b\u0005\u0002>@\u0003\u0002",
    "\u0002\u0002?<\u0003\u0002\u0002\u0002@C\u0003\u0002\u0002\u0002A?\u0003",
    "\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002BG\u0003\u0002\u0002\u0002",
    "CA\u0003\u0002\u0002\u0002DE\u0007\u0005\u0002\u0002EG\u0005\f\u0007",
    "\u0002F0\u0003\u0002\u0002\u0002F:\u0003\u0002\u0002\u0002FD\u0003\u0002",
    "\u0002\u0002G\u0007\u0003\u0002\u0002\u0002HI\u0007\u0007\u0002\u0002",
    "IN\u0005\"\u0012\u0002JK\u0007\u0003\u0002\u0002KM\u0005\"\u0012\u0002",
    "LJ\u0003\u0002\u0002\u0002MP\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002",
    "\u0002NO\u0003\u0002\u0002\u0002O\t\u0003\u0002\u0002\u0002PN\u0003",
    "\u0002\u0002\u0002QR\u0007\u0006\u0002\u0002RW\u0005$\u0013\u0002ST",
    "\u0007\u0003\u0002\u0002TV\u0005$\u0013\u0002US\u0003\u0002\u0002\u0002",
    "VY\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002",
    "\u0002X\u000b\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002Z[\u0007",
    "\f\u0002\u0002[\r\u0003\u0002\u0002\u0002\\_\u0005\u0010\t\u0002]_\u0005",
    "\u0012\n\u0002^\\\u0003\u0002\u0002\u0002^]\u0003\u0002\u0002\u0002",
    "_\u000f\u0003\u0002\u0002\u0002`a\u0007\b\u0002\u0002ab\u0007\t\u0002",
    "\u0002bc\u0007\n\u0002\u0002cd\u0005\u0014\u000b\u0002de\u0005\u0018",
    "\r\u0002e\u0011\u0003\u0002\u0002\u0002fg\u0007\u0016\u0002\u0002gh",
    "\u0007\u0017\u0002\u0002h\u0013\u0003\u0002\u0002\u0002ij\u0007\u000f",
    "\u0002\u0002jk\u0005\u0016\f\u0002k\u0015\u0003\u0002\u0002\u0002lm",
    "\u0007\u000e\u0002\u0002mn\u0005 \u0011\u0002n\u0017\u0003\u0002\u0002",
    "\u0002ou\u0005\u001a\u000e\u0002pq\u0005&\u0014\u0002qr\u0005\u001a",
    "\u000e\u0002rt\u0003\u0002\u0002\u0002sp\u0003\u0002\u0002\u0002tw\u0003",
    "\u0002\u0002\u0002us\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002\u0002",
    "v\u0019\u0003\u0002\u0002\u0002wu\u0003\u0002\u0002\u0002xy\u0007\u0010",
    "\u0002\u0002yz\u0007\u001a\u0002\u0002z|\u0007\u0011\u0002\u0002{}\u0007",
    "\u001a\u0002\u0002|{\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002",
    "}~\u0003\u0002\u0002\u0002~\u007f\u0005\u001c\u000f\u0002\u007f\u001b",
    "\u0003\u0002\u0002\u0002\u0080\u0081\t\u0002\u0002\u0002\u0081\u001d",
    "\u0003\u0002\u0002\u0002\u0082\u0083\u0007\u0018\u0002\u0002\u0083\u001f",
    "\u0003\u0002\u0002\u0002\u0084\u0085\u0007\u0018\u0002\u0002\u0085!",
    "\u0003\u0002\u0002\u0002\u0086\u008b\u0007\u0018\u0002\u0002\u0087\u0088",
    "\u0007\u0003\u0002\u0002\u0088\u008a\u0007\u0018\u0002\u0002\u0089\u0087",
    "\u0003\u0002\u0002\u0002\u008a\u008d\u0003\u0002\u0002\u0002\u008b\u0089",
    "\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c#",
    "\u0003\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008e\u0093",
    "\u0007\u0018\u0002\u0002\u008f\u0090\u0007\u0003\u0002\u0002\u0090\u0092",
    "\u0007\u0018\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002\u0092\u0095",
    "\u0003\u0002\u0002\u0002\u0093\u0091\u0003\u0002\u0002\u0002\u0093\u0094",
    "\u0003\u0002\u0002\u0002\u0094%\u0003\u0002\u0002\u0002\u0095\u0093",
    "\u0003\u0002\u0002\u0002\u0096\u0097\u0007\u0004\u0002\u0002\u0097\'",
    "\u0003\u0002\u0002\u0002\r+7AFNW^u|\u008b\u0093"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "','", "'and'", "'for'", "'usergroups'", "'users'", 
                     "'grant'", "'access'", "'on'", "'in'", null, "'contract'", 
                     "'license'", "'accepting'", "'paying'", "'per'", "'view'", 
                     "'week'", "'day'", "'month'", "'require'", "'nothing'" ];

var symbolicNames = [ null, null, null, "FOR", "USERGROUPS", "USERS", "GRANT", 
                      "ACCESS", "ON", "IN", "SELF", "CONTRACT", "LICENSE", 
                      "ACCEPTING", "PAYING", "PER", "VIEW", "WEEK", "DAY", 
                      "MONTH", "REQUIRE", "NOTHING", "ID", "WS", "INT" ];

var ruleNames =  [ "p", "segment", "audience_clause", "audience_individuals_clause", 
                   "audience_groups_clause", "audience_self_clause", "access_clause", 
                   "conditional_access_clause", "unconditional_access_clause", 
                   "license_clause", "license_representation", "contract_clause", 
                   "payment_over_time", "time_unit", "license_name", "license_resource_id", 
                   "users", "user_groups", "and" ];

function policyParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

policyParser.prototype = Object.create(antlr4.Parser.prototype);
policyParser.prototype.constructor = policyParser;

Object.defineProperty(policyParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

policyParser.EOF = antlr4.Token.EOF;
policyParser.T__0 = 1;
policyParser.T__1 = 2;
policyParser.FOR = 3;
policyParser.USERGROUPS = 4;
policyParser.USERS = 5;
policyParser.GRANT = 6;
policyParser.ACCESS = 7;
policyParser.ON = 8;
policyParser.IN = 9;
policyParser.SELF = 10;
policyParser.CONTRACT = 11;
policyParser.LICENSE = 12;
policyParser.ACCEPTING = 13;
policyParser.PAYING = 14;
policyParser.PER = 15;
policyParser.VIEW = 16;
policyParser.WEEK = 17;
policyParser.DAY = 18;
policyParser.MONTH = 19;
policyParser.REQUIRE = 20;
policyParser.NOTHING = 21;
policyParser.ID = 22;
policyParser.WS = 23;
policyParser.INT = 24;

policyParser.RULE_p = 0;
policyParser.RULE_segment = 1;
policyParser.RULE_audience_clause = 2;
policyParser.RULE_audience_individuals_clause = 3;
policyParser.RULE_audience_groups_clause = 4;
policyParser.RULE_audience_self_clause = 5;
policyParser.RULE_access_clause = 6;
policyParser.RULE_conditional_access_clause = 7;
policyParser.RULE_unconditional_access_clause = 8;
policyParser.RULE_license_clause = 9;
policyParser.RULE_license_representation = 10;
policyParser.RULE_contract_clause = 11;
policyParser.RULE_payment_over_time = 12;
policyParser.RULE_time_unit = 13;
policyParser.RULE_license_name = 14;
policyParser.RULE_license_resource_id = 15;
policyParser.RULE_users = 16;
policyParser.RULE_user_groups = 17;
policyParser.RULE_and = 18;

function PContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_p;
    return this;
}

PContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PContext.prototype.constructor = PContext;

PContext.prototype.segment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SegmentContext);
    } else {
        return this.getTypedRuleContext(SegmentContext,i);
    }
};

PContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterP(this);
	}
};

PContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitP(this);
	}
};




policyParser.PContext = PContext;

policyParser.prototype.p = function() {

    var localctx = new PContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, policyParser.RULE_p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 38;
            this.segment();
            this.state = 41; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===policyParser.FOR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SegmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_segment;
    return this;
}

SegmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SegmentContext.prototype.constructor = SegmentContext;

SegmentContext.prototype.audience_clause = function() {
    return this.getTypedRuleContext(Audience_clauseContext,0);
};

SegmentContext.prototype.access_clause = function() {
    return this.getTypedRuleContext(Access_clauseContext,0);
};

SegmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterSegment(this);
	}
};

SegmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitSegment(this);
	}
};




policyParser.SegmentContext = SegmentContext;

policyParser.prototype.segment = function() {

    var localctx = new SegmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, policyParser.RULE_segment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this.audience_clause();
        this.state = 44;
        this.access_clause();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Audience_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_audience_clause;
    return this;
}

Audience_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Audience_clauseContext.prototype.constructor = Audience_clauseContext;

Audience_clauseContext.prototype.FOR = function() {
    return this.getToken(policyParser.FOR, 0);
};

Audience_clauseContext.prototype.audience_individuals_clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Audience_individuals_clauseContext);
    } else {
        return this.getTypedRuleContext(Audience_individuals_clauseContext,i);
    }
};

Audience_clauseContext.prototype.and = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AndContext);
    } else {
        return this.getTypedRuleContext(AndContext,i);
    }
};

Audience_clauseContext.prototype.audience_groups_clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Audience_groups_clauseContext);
    } else {
        return this.getTypedRuleContext(Audience_groups_clauseContext,i);
    }
};

Audience_clauseContext.prototype.audience_self_clause = function() {
    return this.getTypedRuleContext(Audience_self_clauseContext,0);
};

Audience_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAudience_clause(this);
	}
};

Audience_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAudience_clause(this);
	}
};




policyParser.Audience_clauseContext = Audience_clauseContext;

policyParser.prototype.audience_clause = function() {

    var localctx = new Audience_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, policyParser.RULE_audience_clause);
    var _la = 0; // Token type
    try {
        this.state = 68;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 46;
            this.match(policyParser.FOR);
            this.state = 47;
            this.audience_individuals_clause();
            this.state = 53;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===policyParser.T__1) {
                this.state = 48;
                this.and();
                this.state = 49;
                this.audience_groups_clause();
                this.state = 55;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 56;
            this.match(policyParser.FOR);
            this.state = 57;
            this.audience_groups_clause();
            this.state = 63;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===policyParser.T__1) {
                this.state = 58;
                this.and();
                this.state = 59;
                this.audience_individuals_clause();
                this.state = 65;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 66;
            this.match(policyParser.FOR);
            this.state = 67;
            this.audience_self_clause();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Audience_individuals_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_audience_individuals_clause;
    return this;
}

Audience_individuals_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Audience_individuals_clauseContext.prototype.constructor = Audience_individuals_clauseContext;

Audience_individuals_clauseContext.prototype.USERS = function() {
    return this.getToken(policyParser.USERS, 0);
};

Audience_individuals_clauseContext.prototype.users = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UsersContext);
    } else {
        return this.getTypedRuleContext(UsersContext,i);
    }
};

Audience_individuals_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAudience_individuals_clause(this);
	}
};

Audience_individuals_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAudience_individuals_clause(this);
	}
};




policyParser.Audience_individuals_clauseContext = Audience_individuals_clauseContext;

policyParser.prototype.audience_individuals_clause = function() {

    var localctx = new Audience_individuals_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, policyParser.RULE_audience_individuals_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(policyParser.USERS);
        this.state = 71;
        this.users();
        this.state = 76;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===policyParser.T__0) {
            this.state = 72;
            this.match(policyParser.T__0);
            this.state = 73;
            this.users();
            this.state = 78;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Audience_groups_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_audience_groups_clause;
    return this;
}

Audience_groups_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Audience_groups_clauseContext.prototype.constructor = Audience_groups_clauseContext;

Audience_groups_clauseContext.prototype.USERGROUPS = function() {
    return this.getToken(policyParser.USERGROUPS, 0);
};

Audience_groups_clauseContext.prototype.user_groups = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(User_groupsContext);
    } else {
        return this.getTypedRuleContext(User_groupsContext,i);
    }
};

Audience_groups_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAudience_groups_clause(this);
	}
};

Audience_groups_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAudience_groups_clause(this);
	}
};




policyParser.Audience_groups_clauseContext = Audience_groups_clauseContext;

policyParser.prototype.audience_groups_clause = function() {

    var localctx = new Audience_groups_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, policyParser.RULE_audience_groups_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        this.match(policyParser.USERGROUPS);
        this.state = 80;
        this.user_groups();
        this.state = 85;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===policyParser.T__0) {
            this.state = 81;
            this.match(policyParser.T__0);
            this.state = 82;
            this.user_groups();
            this.state = 87;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Audience_self_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_audience_self_clause;
    return this;
}

Audience_self_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Audience_self_clauseContext.prototype.constructor = Audience_self_clauseContext;

Audience_self_clauseContext.prototype.SELF = function() {
    return this.getToken(policyParser.SELF, 0);
};

Audience_self_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAudience_self_clause(this);
	}
};

Audience_self_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAudience_self_clause(this);
	}
};




policyParser.Audience_self_clauseContext = Audience_self_clauseContext;

policyParser.prototype.audience_self_clause = function() {

    var localctx = new Audience_self_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, policyParser.RULE_audience_self_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        this.match(policyParser.SELF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Access_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_access_clause;
    return this;
}

Access_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Access_clauseContext.prototype.constructor = Access_clauseContext;

Access_clauseContext.prototype.conditional_access_clause = function() {
    return this.getTypedRuleContext(Conditional_access_clauseContext,0);
};

Access_clauseContext.prototype.unconditional_access_clause = function() {
    return this.getTypedRuleContext(Unconditional_access_clauseContext,0);
};

Access_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAccess_clause(this);
	}
};

Access_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAccess_clause(this);
	}
};




policyParser.Access_clauseContext = Access_clauseContext;

policyParser.prototype.access_clause = function() {

    var localctx = new Access_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, policyParser.RULE_access_clause);
    try {
        this.state = 92;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case policyParser.GRANT:
            this.enterOuterAlt(localctx, 1);
            this.state = 90;
            this.conditional_access_clause();
            break;
        case policyParser.REQUIRE:
            this.enterOuterAlt(localctx, 2);
            this.state = 91;
            this.unconditional_access_clause();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Conditional_access_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_conditional_access_clause;
    return this;
}

Conditional_access_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Conditional_access_clauseContext.prototype.constructor = Conditional_access_clauseContext;

Conditional_access_clauseContext.prototype.GRANT = function() {
    return this.getToken(policyParser.GRANT, 0);
};

Conditional_access_clauseContext.prototype.ACCESS = function() {
    return this.getToken(policyParser.ACCESS, 0);
};

Conditional_access_clauseContext.prototype.ON = function() {
    return this.getToken(policyParser.ON, 0);
};

Conditional_access_clauseContext.prototype.license_clause = function() {
    return this.getTypedRuleContext(License_clauseContext,0);
};

Conditional_access_clauseContext.prototype.contract_clause = function() {
    return this.getTypedRuleContext(Contract_clauseContext,0);
};

Conditional_access_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterConditional_access_clause(this);
	}
};

Conditional_access_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitConditional_access_clause(this);
	}
};




policyParser.Conditional_access_clauseContext = Conditional_access_clauseContext;

policyParser.prototype.conditional_access_clause = function() {

    var localctx = new Conditional_access_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, policyParser.RULE_conditional_access_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.match(policyParser.GRANT);
        this.state = 95;
        this.match(policyParser.ACCESS);
        this.state = 96;
        this.match(policyParser.ON);
        this.state = 97;
        this.license_clause();
        this.state = 98;
        this.contract_clause();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Unconditional_access_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_unconditional_access_clause;
    return this;
}

Unconditional_access_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unconditional_access_clauseContext.prototype.constructor = Unconditional_access_clauseContext;

Unconditional_access_clauseContext.prototype.REQUIRE = function() {
    return this.getToken(policyParser.REQUIRE, 0);
};

Unconditional_access_clauseContext.prototype.NOTHING = function() {
    return this.getToken(policyParser.NOTHING, 0);
};

Unconditional_access_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterUnconditional_access_clause(this);
	}
};

Unconditional_access_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitUnconditional_access_clause(this);
	}
};




policyParser.Unconditional_access_clauseContext = Unconditional_access_clauseContext;

policyParser.prototype.unconditional_access_clause = function() {

    var localctx = new Unconditional_access_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, policyParser.RULE_unconditional_access_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.match(policyParser.REQUIRE);
        this.state = 101;
        this.match(policyParser.NOTHING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function License_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_license_clause;
    return this;
}

License_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
License_clauseContext.prototype.constructor = License_clauseContext;

License_clauseContext.prototype.ACCEPTING = function() {
    return this.getToken(policyParser.ACCEPTING, 0);
};

License_clauseContext.prototype.license_representation = function() {
    return this.getTypedRuleContext(License_representationContext,0);
};

License_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterLicense_clause(this);
	}
};

License_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitLicense_clause(this);
	}
};




policyParser.License_clauseContext = License_clauseContext;

policyParser.prototype.license_clause = function() {

    var localctx = new License_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, policyParser.RULE_license_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this.match(policyParser.ACCEPTING);
        this.state = 104;
        this.license_representation();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function License_representationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_license_representation;
    return this;
}

License_representationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
License_representationContext.prototype.constructor = License_representationContext;

License_representationContext.prototype.LICENSE = function() {
    return this.getToken(policyParser.LICENSE, 0);
};

License_representationContext.prototype.license_resource_id = function() {
    return this.getTypedRuleContext(License_resource_idContext,0);
};

License_representationContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterLicense_representation(this);
	}
};

License_representationContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitLicense_representation(this);
	}
};




policyParser.License_representationContext = License_representationContext;

policyParser.prototype.license_representation = function() {

    var localctx = new License_representationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, policyParser.RULE_license_representation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.match(policyParser.LICENSE);
        this.state = 107;
        this.license_resource_id();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Contract_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_contract_clause;
    return this;
}

Contract_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Contract_clauseContext.prototype.constructor = Contract_clauseContext;

Contract_clauseContext.prototype.payment_over_time = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Payment_over_timeContext);
    } else {
        return this.getTypedRuleContext(Payment_over_timeContext,i);
    }
};

Contract_clauseContext.prototype.and = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AndContext);
    } else {
        return this.getTypedRuleContext(AndContext,i);
    }
};

Contract_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterContract_clause(this);
	}
};

Contract_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitContract_clause(this);
	}
};




policyParser.Contract_clauseContext = Contract_clauseContext;

policyParser.prototype.contract_clause = function() {

    var localctx = new Contract_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, policyParser.RULE_contract_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this.payment_over_time();
        this.state = 115;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===policyParser.T__1) {
            this.state = 110;
            this.and();
            this.state = 111;
            this.payment_over_time();
            this.state = 117;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Payment_over_timeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_payment_over_time;
    return this;
}

Payment_over_timeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Payment_over_timeContext.prototype.constructor = Payment_over_timeContext;

Payment_over_timeContext.prototype.PAYING = function() {
    return this.getToken(policyParser.PAYING, 0);
};

Payment_over_timeContext.prototype.INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(policyParser.INT);
    } else {
        return this.getToken(policyParser.INT, i);
    }
};


Payment_over_timeContext.prototype.PER = function() {
    return this.getToken(policyParser.PER, 0);
};

Payment_over_timeContext.prototype.time_unit = function() {
    return this.getTypedRuleContext(Time_unitContext,0);
};

Payment_over_timeContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterPayment_over_time(this);
	}
};

Payment_over_timeContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitPayment_over_time(this);
	}
};




policyParser.Payment_over_timeContext = Payment_over_timeContext;

policyParser.prototype.payment_over_time = function() {

    var localctx = new Payment_over_timeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, policyParser.RULE_payment_over_time);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.match(policyParser.PAYING);
        this.state = 119;
        this.match(policyParser.INT);
        this.state = 120;
        this.match(policyParser.PER);
        this.state = 122;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===policyParser.INT) {
            this.state = 121;
            this.match(policyParser.INT);
        }

        this.state = 124;
        this.time_unit();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Time_unitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_time_unit;
    return this;
}

Time_unitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Time_unitContext.prototype.constructor = Time_unitContext;

Time_unitContext.prototype.WEEK = function() {
    return this.getToken(policyParser.WEEK, 0);
};

Time_unitContext.prototype.MONTH = function() {
    return this.getToken(policyParser.MONTH, 0);
};

Time_unitContext.prototype.DAY = function() {
    return this.getToken(policyParser.DAY, 0);
};

Time_unitContext.prototype.VIEW = function() {
    return this.getToken(policyParser.VIEW, 0);
};

Time_unitContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterTime_unit(this);
	}
};

Time_unitContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitTime_unit(this);
	}
};




policyParser.Time_unitContext = Time_unitContext;

policyParser.prototype.time_unit = function() {

    var localctx = new Time_unitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, policyParser.RULE_time_unit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << policyParser.VIEW) | (1 << policyParser.WEEK) | (1 << policyParser.DAY) | (1 << policyParser.MONTH))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function License_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_license_name;
    return this;
}

License_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
License_nameContext.prototype.constructor = License_nameContext;

License_nameContext.prototype.ID = function() {
    return this.getToken(policyParser.ID, 0);
};

License_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterLicense_name(this);
	}
};

License_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitLicense_name(this);
	}
};




policyParser.License_nameContext = License_nameContext;

policyParser.prototype.license_name = function() {

    var localctx = new License_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, policyParser.RULE_license_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.match(policyParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function License_resource_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_license_resource_id;
    return this;
}

License_resource_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
License_resource_idContext.prototype.constructor = License_resource_idContext;

License_resource_idContext.prototype.ID = function() {
    return this.getToken(policyParser.ID, 0);
};

License_resource_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterLicense_resource_id(this);
	}
};

License_resource_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitLicense_resource_id(this);
	}
};




policyParser.License_resource_idContext = License_resource_idContext;

policyParser.prototype.license_resource_id = function() {

    var localctx = new License_resource_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, policyParser.RULE_license_resource_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        this.match(policyParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UsersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_users;
    return this;
}

UsersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsersContext.prototype.constructor = UsersContext;

UsersContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(policyParser.ID);
    } else {
        return this.getToken(policyParser.ID, i);
    }
};


UsersContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterUsers(this);
	}
};

UsersContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitUsers(this);
	}
};




policyParser.UsersContext = UsersContext;

policyParser.prototype.users = function() {

    var localctx = new UsersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, policyParser.RULE_users);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.match(policyParser.ID);
        this.state = 137;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 133;
                this.match(policyParser.T__0);
                this.state = 134;
                this.match(policyParser.ID); 
            }
            this.state = 139;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function User_groupsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_user_groups;
    return this;
}

User_groupsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
User_groupsContext.prototype.constructor = User_groupsContext;

User_groupsContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(policyParser.ID);
    } else {
        return this.getToken(policyParser.ID, i);
    }
};


User_groupsContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterUser_groups(this);
	}
};

User_groupsContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitUser_groups(this);
	}
};




policyParser.User_groupsContext = User_groupsContext;

policyParser.prototype.user_groups = function() {

    var localctx = new User_groupsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, policyParser.RULE_user_groups);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(policyParser.ID);
        this.state = 145;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 141;
                this.match(policyParser.T__0);
                this.state = 142;
                this.match(policyParser.ID); 
            }
            this.state = 147;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_and;
    return this;
}

AndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndContext.prototype.constructor = AndContext;


AndContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAnd(this);
	}
};

AndContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAnd(this);
	}
};




policyParser.AndContext = AndContext;

policyParser.prototype.and = function() {

    var localctx = new AndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, policyParser.RULE_and);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        this.match(policyParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.policyParser = policyParser;
