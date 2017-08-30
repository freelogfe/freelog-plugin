// Generated from policy.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by policyParser.
function policyListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

policyListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
policyListener.prototype.constructor = policyListener;

// Enter a parse tree produced by policyParser#p.
policyListener.prototype.enterP = function(ctx) {
};

// Exit a parse tree produced by policyParser#p.
policyListener.prototype.exitP = function(ctx) {
};


// Enter a parse tree produced by policyParser#segment.
policyListener.prototype.enterSegment = function(ctx) {
};

// Exit a parse tree produced by policyParser#segment.
policyListener.prototype.exitSegment = function(ctx) {
};


// Enter a parse tree produced by policyParser#audience_clause.
policyListener.prototype.enterAudience_clause = function(ctx) {
};

// Exit a parse tree produced by policyParser#audience_clause.
policyListener.prototype.exitAudience_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#audience_individuals_clause.
policyListener.prototype.enterAudience_individuals_clause = function(ctx) {
};

// Exit a parse tree produced by policyParser#audience_individuals_clause.
policyListener.prototype.exitAudience_individuals_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#audience_groups_clause.
policyListener.prototype.enterAudience_groups_clause = function(ctx) {
};

// Exit a parse tree produced by policyParser#audience_groups_clause.
policyListener.prototype.exitAudience_groups_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#audience_self_clause.
policyListener.prototype.enterAudience_self_clause = function(ctx) {
};

// Exit a parse tree produced by policyParser#audience_self_clause.
policyListener.prototype.exitAudience_self_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#access_clause.
policyListener.prototype.enterAccess_clause = function(ctx) {
};

// Exit a parse tree produced by policyParser#access_clause.
policyListener.prototype.exitAccess_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#conditional_access_clause.
policyListener.prototype.enterConditional_access_clause = function(ctx) {
};

// Exit a parse tree produced by policyParser#conditional_access_clause.
policyListener.prototype.exitConditional_access_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#unconditional_access_clause.
policyListener.prototype.enterUnconditional_access_clause = function(ctx) {
};

// Exit a parse tree produced by policyParser#unconditional_access_clause.
policyListener.prototype.exitUnconditional_access_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#license_clause.
policyListener.prototype.enterLicense_clause = function(ctx) {
};

// Exit a parse tree produced by policyParser#license_clause.
policyListener.prototype.exitLicense_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#license_representation.
policyListener.prototype.enterLicense_representation = function(ctx) {
};

// Exit a parse tree produced by policyParser#license_representation.
policyListener.prototype.exitLicense_representation = function(ctx) {
};


// Enter a parse tree produced by policyParser#contract_clause.
policyListener.prototype.enterContract_clause = function(ctx) {
};

// Exit a parse tree produced by policyParser#contract_clause.
policyListener.prototype.exitContract_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#payment_over_time.
policyListener.prototype.enterPayment_over_time = function(ctx) {
};

// Exit a parse tree produced by policyParser#payment_over_time.
policyListener.prototype.exitPayment_over_time = function(ctx) {
};


// Enter a parse tree produced by policyParser#time_unit.
policyListener.prototype.enterTime_unit = function(ctx) {
};

// Exit a parse tree produced by policyParser#time_unit.
policyListener.prototype.exitTime_unit = function(ctx) {
};


// Enter a parse tree produced by policyParser#license_name.
policyListener.prototype.enterLicense_name = function(ctx) {
};

// Exit a parse tree produced by policyParser#license_name.
policyListener.prototype.exitLicense_name = function(ctx) {
};


// Enter a parse tree produced by policyParser#license_resource_id.
policyListener.prototype.enterLicense_resource_id = function(ctx) {
};

// Exit a parse tree produced by policyParser#license_resource_id.
policyListener.prototype.exitLicense_resource_id = function(ctx) {
};


// Enter a parse tree produced by policyParser#users.
policyListener.prototype.enterUsers = function(ctx) {
};

// Exit a parse tree produced by policyParser#users.
policyListener.prototype.exitUsers = function(ctx) {
};


// Enter a parse tree produced by policyParser#user_groups.
policyListener.prototype.enterUser_groups = function(ctx) {
};

// Exit a parse tree produced by policyParser#user_groups.
policyListener.prototype.exitUser_groups = function(ctx) {
};


// Enter a parse tree produced by policyParser#and.
policyListener.prototype.enterAnd = function(ctx) {
};

// Exit a parse tree produced by policyParser#and.
policyListener.prototype.exitAnd = function(ctx) {
};



exports.policyListener = policyListener;