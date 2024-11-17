// Generated from ./grammar/biesC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import biesCVisitor from './biesCVisitor.js';

const serializedATN = [4,1,50,328,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,1,0,5,0,72,8,0,10,0,12,0,75,9,0,1,0,1,0,1,1,1,1,3,1,81,8,1,1,2,1,2,1,
2,1,2,1,2,1,2,3,2,89,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,3,4,99,8,4,1,5,
1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,128,8,8,1,9,1,9,1,9,1,9,5,9,134,8,9,
10,9,12,9,137,9,9,3,9,139,8,9,1,9,1,9,1,10,1,10,1,11,1,11,1,11,5,11,148,
8,11,10,11,12,11,151,9,11,1,12,1,12,1,12,5,12,156,8,12,10,12,12,12,159,9,
12,1,13,1,13,1,13,5,13,164,8,13,10,13,12,13,167,9,13,1,14,1,14,1,14,5,14,
172,8,14,10,14,12,14,175,9,14,1,15,1,15,1,15,5,15,180,8,15,10,15,12,15,183,
9,15,1,16,1,16,1,16,5,16,188,8,16,10,16,12,16,191,9,16,1,17,1,17,1,17,5,
17,196,8,17,10,17,12,17,199,9,17,1,18,1,18,1,18,3,18,204,8,18,1,19,1,19,
1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,217,8,19,1,20,1,20,1,21,
1,21,1,21,5,21,224,8,21,10,21,12,21,227,9,21,1,22,1,22,3,22,231,8,22,1,22,
1,22,1,23,1,23,1,23,5,23,238,8,23,10,23,12,23,241,9,23,1,24,1,24,1,24,1,
24,5,24,247,8,24,10,24,12,24,250,9,24,3,24,252,8,24,1,24,1,24,3,24,256,8,
24,1,25,1,25,1,25,1,25,5,25,262,8,25,10,25,12,25,265,9,25,3,25,267,8,25,
1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,
27,1,28,3,28,285,8,28,1,28,1,28,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,31,
1,31,5,31,298,8,31,10,31,12,31,301,9,31,1,31,1,31,1,32,1,32,5,32,307,8,32,
10,32,12,32,310,9,32,1,32,1,32,3,32,314,8,32,1,33,1,33,1,33,1,33,1,33,3,
33,321,8,33,1,34,1,34,1,34,1,34,1,34,1,34,0,0,35,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,
68,0,7,1,0,7,8,1,0,9,12,1,0,13,14,1,0,15,16,2,0,14,14,18,18,3,0,31,33,42,
42,46,47,1,0,34,40,331,0,73,1,0,0,0,2,80,1,0,0,0,4,88,1,0,0,0,6,90,1,0,0,
0,8,98,1,0,0,0,10,100,1,0,0,0,12,105,1,0,0,0,14,110,1,0,0,0,16,127,1,0,0,
0,18,129,1,0,0,0,20,142,1,0,0,0,22,144,1,0,0,0,24,152,1,0,0,0,26,160,1,0,
0,0,28,168,1,0,0,0,30,176,1,0,0,0,32,184,1,0,0,0,34,192,1,0,0,0,36,203,1,
0,0,0,38,216,1,0,0,0,40,218,1,0,0,0,42,220,1,0,0,0,44,228,1,0,0,0,46,234,
1,0,0,0,48,255,1,0,0,0,50,257,1,0,0,0,52,270,1,0,0,0,54,275,1,0,0,0,56,284,
1,0,0,0,58,288,1,0,0,0,60,290,1,0,0,0,62,295,1,0,0,0,64,313,1,0,0,0,66,320,
1,0,0,0,68,322,1,0,0,0,70,72,3,2,1,0,71,70,1,0,0,0,72,75,1,0,0,0,73,71,1,
0,0,0,73,74,1,0,0,0,74,76,1,0,0,0,75,73,1,0,0,0,76,77,5,0,0,1,77,1,1,0,0,
0,78,81,3,4,2,0,79,81,3,20,10,0,80,78,1,0,0,0,80,79,1,0,0,0,81,3,1,0,0,0,
82,89,3,10,5,0,83,89,3,12,6,0,84,89,3,14,7,0,85,89,3,16,8,0,86,89,3,8,4,
0,87,89,3,6,3,0,88,82,1,0,0,0,88,83,1,0,0,0,88,84,1,0,0,0,88,85,1,0,0,0,
88,86,1,0,0,0,88,87,1,0,0,0,89,5,1,0,0,0,90,91,5,47,0,0,91,92,5,1,0,0,92,
93,3,20,10,0,93,7,1,0,0,0,94,95,5,24,0,0,95,99,5,47,0,0,96,97,5,26,0,0,97,
99,5,47,0,0,98,94,1,0,0,0,98,96,1,0,0,0,99,9,1,0,0,0,100,101,5,23,0,0,101,
102,5,47,0,0,102,103,5,1,0,0,103,104,3,20,10,0,104,11,1,0,0,0,105,106,5,
24,0,0,106,107,5,47,0,0,107,108,5,1,0,0,108,109,3,20,10,0,109,13,1,0,0,0,
110,111,5,26,0,0,111,112,5,47,0,0,112,113,5,1,0,0,113,114,3,20,10,0,114,
15,1,0,0,0,115,116,5,25,0,0,116,117,5,47,0,0,117,118,3,18,9,0,118,119,5,
41,0,0,119,120,3,60,30,0,120,128,1,0,0,0,121,122,5,25,0,0,122,123,5,47,0,
0,123,124,3,18,9,0,124,125,5,41,0,0,125,126,3,64,32,0,126,128,1,0,0,0,127,
115,1,0,0,0,127,121,1,0,0,0,128,17,1,0,0,0,129,138,5,2,0,0,130,135,5,47,
0,0,131,132,5,3,0,0,132,134,5,47,0,0,133,131,1,0,0,0,134,137,1,0,0,0,135,
133,1,0,0,0,135,136,1,0,0,0,136,139,1,0,0,0,137,135,1,0,0,0,138,130,1,0,
0,0,138,139,1,0,0,0,139,140,1,0,0,0,140,141,5,4,0,0,141,19,1,0,0,0,142,143,
3,22,11,0,143,21,1,0,0,0,144,149,3,24,12,0,145,146,5,5,0,0,146,148,3,24,
12,0,147,145,1,0,0,0,148,151,1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,
23,1,0,0,0,151,149,1,0,0,0,152,157,3,26,13,0,153,154,5,6,0,0,154,156,3,26,
13,0,155,153,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,0,158,
25,1,0,0,0,159,157,1,0,0,0,160,165,3,28,14,0,161,162,7,0,0,0,162,164,3,28,
14,0,163,161,1,0,0,0,164,167,1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,
27,1,0,0,0,167,165,1,0,0,0,168,173,3,30,15,0,169,170,7,1,0,0,170,172,3,30,
15,0,171,169,1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,
29,1,0,0,0,175,173,1,0,0,0,176,181,3,32,16,0,177,178,7,2,0,0,178,180,3,32,
16,0,179,177,1,0,0,0,180,183,1,0,0,0,181,179,1,0,0,0,181,182,1,0,0,0,182,
31,1,0,0,0,183,181,1,0,0,0,184,189,3,34,17,0,185,186,7,3,0,0,186,188,3,34,
17,0,187,185,1,0,0,0,188,191,1,0,0,0,189,187,1,0,0,0,189,190,1,0,0,0,190,
33,1,0,0,0,191,189,1,0,0,0,192,197,3,36,18,0,193,194,5,17,0,0,194,196,3,
36,18,0,195,193,1,0,0,0,196,199,1,0,0,0,197,195,1,0,0,0,197,198,1,0,0,0,
198,35,1,0,0,0,199,197,1,0,0,0,200,201,7,4,0,0,201,204,3,36,18,0,202,204,
3,38,19,0,203,200,1,0,0,0,203,202,1,0,0,0,204,37,1,0,0,0,205,217,3,50,25,
0,206,217,3,42,21,0,207,217,3,40,20,0,208,209,5,2,0,0,209,210,3,20,10,0,
210,211,5,4,0,0,211,217,1,0,0,0,212,217,3,52,26,0,213,217,3,54,27,0,214,
217,3,66,33,0,215,217,3,68,34,0,216,205,1,0,0,0,216,206,1,0,0,0,216,207,
1,0,0,0,216,208,1,0,0,0,216,212,1,0,0,0,216,213,1,0,0,0,216,214,1,0,0,0,
216,215,1,0,0,0,217,39,1,0,0,0,218,219,7,5,0,0,219,41,1,0,0,0,220,221,5,
47,0,0,221,225,3,44,22,0,222,224,3,44,22,0,223,222,1,0,0,0,224,227,1,0,0,
0,225,223,1,0,0,0,225,226,1,0,0,0,226,43,1,0,0,0,227,225,1,0,0,0,228,230,
5,2,0,0,229,231,3,46,23,0,230,229,1,0,0,0,230,231,1,0,0,0,231,232,1,0,0,
0,232,233,5,4,0,0,233,45,1,0,0,0,234,239,3,20,10,0,235,236,5,3,0,0,236,238,
3,20,10,0,237,235,1,0,0,0,238,241,1,0,0,0,239,237,1,0,0,0,239,240,1,0,0,
0,240,47,1,0,0,0,241,239,1,0,0,0,242,251,5,2,0,0,243,248,5,47,0,0,244,245,
5,3,0,0,245,247,5,47,0,0,246,244,1,0,0,0,247,250,1,0,0,0,248,246,1,0,0,0,
248,249,1,0,0,0,249,252,1,0,0,0,250,248,1,0,0,0,251,243,1,0,0,0,251,252,
1,0,0,0,252,253,1,0,0,0,253,256,5,4,0,0,254,256,5,47,0,0,255,242,1,0,0,0,
255,254,1,0,0,0,256,49,1,0,0,0,257,266,5,19,0,0,258,263,3,20,10,0,259,260,
5,3,0,0,260,262,3,20,10,0,261,259,1,0,0,0,262,265,1,0,0,0,263,261,1,0,0,
0,263,264,1,0,0,0,264,267,1,0,0,0,265,263,1,0,0,0,266,258,1,0,0,0,266,267,
1,0,0,0,267,268,1,0,0,0,268,269,5,20,0,0,269,51,1,0,0,0,270,271,5,47,0,0,
271,272,5,19,0,0,272,273,3,20,10,0,273,274,5,20,0,0,274,53,1,0,0,0,275,276,
5,28,0,0,276,277,5,2,0,0,277,278,3,20,10,0,278,279,5,4,0,0,279,280,3,56,
28,0,280,281,5,30,0,0,281,282,3,58,29,0,282,55,1,0,0,0,283,285,5,29,0,0,
284,283,1,0,0,0,284,285,1,0,0,0,285,286,1,0,0,0,286,287,3,64,32,0,287,57,
1,0,0,0,288,289,3,64,32,0,289,59,1,0,0,0,290,291,5,26,0,0,291,292,3,62,31,
0,292,293,5,27,0,0,293,294,3,64,32,0,294,61,1,0,0,0,295,299,5,21,0,0,296,
298,3,10,5,0,297,296,1,0,0,0,298,301,1,0,0,0,299,297,1,0,0,0,299,300,1,0,
0,0,300,302,1,0,0,0,301,299,1,0,0,0,302,303,5,22,0,0,303,63,1,0,0,0,304,
308,5,21,0,0,305,307,3,2,1,0,306,305,1,0,0,0,307,310,1,0,0,0,308,306,1,0,
0,0,308,309,1,0,0,0,309,311,1,0,0,0,310,308,1,0,0,0,311,314,5,22,0,0,312,
314,3,20,10,0,313,304,1,0,0,0,313,312,1,0,0,0,314,65,1,0,0,0,315,316,3,48,
24,0,316,317,5,41,0,0,317,318,3,64,32,0,318,321,1,0,0,0,319,321,3,60,30,
0,320,315,1,0,0,0,320,319,1,0,0,0,321,67,1,0,0,0,322,323,7,6,0,0,323,324,
5,2,0,0,324,325,3,20,10,0,325,326,5,4,0,0,326,69,1,0,0,0,29,73,80,88,98,
127,135,138,149,157,165,173,181,189,197,203,216,225,230,239,248,251,255,
263,266,284,299,308,313,320];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesCParser extends antlr4.Parser {

    static grammarFileName = "biesC.g4";
    static literalNames = [ null, "'='", "'('", "','", "')'", "'||'", "'&&'", 
                            "'=='", "'!='", "'>'", "'>='", "'<'", "'<='", 
                            "'+'", "'-'", "'*'", "'/'", "'**'", "'!'", "'['", 
                            "']'", "'{'", "'}'", "'const'", "'var'", "'fun'", 
                            "'let'", "'in'", "'if'", "'then'", "'else'", 
                            "'true'", "'false'", "'null'", "'print'", "'input'", 
                            "'len'", "'int'", "'str'", "'bool'", "'list'", 
                            "'=>'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "CONST", 
                             "VAR", "FUN", "LET", "IN", "IF", "THEN", "ELSE", 
                             "TRUE", "FALSE", "NULL", "PRINT", "INPUT", 
                             "LEN", "INT", "STR", "BOOL", "LIST", "ARROW", 
                             "NUMBER", "INTEGER", "FLOAT", "SCI", "STRING", 
                             "ID", "LC", "BC", "WS" ];
    static ruleNames = [ "program", "statement", "declaration", "reasignation", 
                         "nullInitDeclaration", "constDeclaration", "varDeclaration", 
                         "letDeclaration", "funDeclaration", "paramsFun", 
                         "expression", "logicalOrExpression", "logicalAndExpression", 
                         "equalityExpression", "relationalExpression", "additiveExpression", 
                         "multiplicativeExpression", "exponentialExpression", 
                         "unaryExpression", "primaryExpression", "literal", 
                         "functionCallChain", "funtionArgs", "argumentList", 
                         "params", "list", "listAccess", "ifExpression", 
                         "thenExpr", "elseExpr", "letInDeclaration", "blockDeclaration", 
                         "blockExpression", "lambda", "builtinFunction" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesCParser.ruleNames;
        this.literalNames = biesCParser.literalNames;
        this.symbolicNames = biesCParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, biesCParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2542551044) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 50687) !== 0)) {
	            this.state = 70;
	            this.statement();
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 76;
	        this.match(biesCParser.EOF);
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
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, biesCParser.RULE_statement);
	    try {
	        this.state = 80;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 78;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 79;
	            this.expression();
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
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, biesCParser.RULE_declaration);
	    try {
	        this.state = 88;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.constDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
	            this.varDeclaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 84;
	            this.letDeclaration();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 85;
	            this.funDeclaration();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 86;
	            this.nullInitDeclaration();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 87;
	            this.reasignation();
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
	}



	reasignation() {
	    let localctx = new ReasignationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, biesCParser.RULE_reasignation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(biesCParser.ID);
	        this.state = 91;
	        this.match(biesCParser.T__0);
	        this.state = 92;
	        this.expression();
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
	}



	nullInitDeclaration() {
	    let localctx = new NullInitDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, biesCParser.RULE_nullInitDeclaration);
	    try {
	        this.state = 98;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 94;
	            this.match(biesCParser.VAR);
	            this.state = 95;
	            this.match(biesCParser.ID);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 96;
	            this.match(biesCParser.LET);
	            this.state = 97;
	            this.match(biesCParser.ID);
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
	}



	constDeclaration() {
	    let localctx = new ConstDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, biesCParser.RULE_constDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(biesCParser.CONST);
	        this.state = 101;
	        this.match(biesCParser.ID);
	        this.state = 102;
	        this.match(biesCParser.T__0);
	        this.state = 103;
	        this.expression();
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
	}



	varDeclaration() {
	    let localctx = new VarDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, biesCParser.RULE_varDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(biesCParser.VAR);
	        this.state = 106;
	        this.match(biesCParser.ID);
	        this.state = 107;
	        this.match(biesCParser.T__0);
	        this.state = 108;
	        this.expression();
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
	}



	letDeclaration() {
	    let localctx = new LetDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, biesCParser.RULE_letDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(biesCParser.LET);
	        this.state = 111;
	        this.match(biesCParser.ID);
	        this.state = 112;
	        this.match(biesCParser.T__0);
	        this.state = 113;
	        this.expression();
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
	}



	funDeclaration() {
	    let localctx = new FunDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, biesCParser.RULE_funDeclaration);
	    try {
	        this.state = 127;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 115;
	            this.match(biesCParser.FUN);
	            this.state = 116;
	            this.match(biesCParser.ID);
	            this.state = 117;
	            this.paramsFun();
	            this.state = 118;
	            this.match(biesCParser.ARROW);
	            this.state = 119;
	            this.letInDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 121;
	            this.match(biesCParser.FUN);
	            this.state = 122;
	            this.match(biesCParser.ID);
	            this.state = 123;
	            this.paramsFun();
	            this.state = 124;
	            this.match(biesCParser.ARROW);
	            this.state = 125;
	            this.blockExpression();
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
	}



	paramsFun() {
	    let localctx = new ParamsFunContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, biesCParser.RULE_paramsFun);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(biesCParser.T__1);
	        this.state = 138;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===47) {
	            this.state = 130;
	            this.match(biesCParser.ID);
	            this.state = 135;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3) {
	                this.state = 131;
	                this.match(biesCParser.T__2);
	                this.state = 132;
	                this.match(biesCParser.ID);
	                this.state = 137;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 140;
	        this.match(biesCParser.T__3);
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
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, biesCParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.logicalOrExpression();
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
	}



	logicalOrExpression() {
	    let localctx = new LogicalOrExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, biesCParser.RULE_logicalOrExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.logicalAndExpression();
	        this.state = 149;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 145;
	                this.match(biesCParser.T__4);
	                this.state = 146;
	                this.logicalAndExpression(); 
	            }
	            this.state = 151;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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
	}



	logicalAndExpression() {
	    let localctx = new LogicalAndExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, biesCParser.RULE_logicalAndExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.equalityExpression();
	        this.state = 157;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 153;
	                this.match(biesCParser.T__5);
	                this.state = 154;
	                this.equalityExpression(); 
	            }
	            this.state = 159;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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
	}



	equalityExpression() {
	    let localctx = new EqualityExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, biesCParser.RULE_equalityExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.relationalExpression();
	        this.state = 165;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 161;
	                _la = this._input.LA(1);
	                if(!(_la===7 || _la===8)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 162;
	                this.relationalExpression(); 
	            }
	            this.state = 167;
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
	}



	relationalExpression() {
	    let localctx = new RelationalExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, biesCParser.RULE_relationalExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.additiveExpression();
	        this.state = 173;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 169;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7680) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 170;
	                this.additiveExpression(); 
	            }
	            this.state = 175;
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
	}



	additiveExpression() {
	    let localctx = new AdditiveExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, biesCParser.RULE_additiveExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.multiplicativeExpression();
	        this.state = 181;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 177;
	                _la = this._input.LA(1);
	                if(!(_la===13 || _la===14)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 178;
	                this.multiplicativeExpression(); 
	            }
	            this.state = 183;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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
	}



	multiplicativeExpression() {
	    let localctx = new MultiplicativeExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, biesCParser.RULE_multiplicativeExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.exponentialExpression();
	        this.state = 189;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 185;
	                _la = this._input.LA(1);
	                if(!(_la===15 || _la===16)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 186;
	                this.exponentialExpression(); 
	            }
	            this.state = 191;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
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
	}



	exponentialExpression() {
	    let localctx = new ExponentialExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, biesCParser.RULE_exponentialExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.unaryExpression();
	        this.state = 197;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 193;
	                this.match(biesCParser.T__16);
	                this.state = 194;
	                this.unaryExpression(); 
	            }
	            this.state = 199;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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
	}



	unaryExpression() {
	    let localctx = new UnaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, biesCParser.RULE_unaryExpression);
	    var _la = 0;
	    try {
	        this.state = 203;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 200;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===18)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 201;
	            this.unaryExpression();
	            break;
	        case 2:
	        case 19:
	        case 26:
	        case 28:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 42:
	        case 46:
	        case 47:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 202;
	            this.primaryExpression();
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
	}



	primaryExpression() {
	    let localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, biesCParser.RULE_primaryExpression);
	    try {
	        this.state = 216;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 205;
	            this.list();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 206;
	            this.functionCallChain();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 207;
	            this.literal();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 208;
	            this.match(biesCParser.T__1);
	            this.state = 209;
	            this.expression();
	            this.state = 210;
	            this.match(biesCParser.T__3);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 212;
	            this.listAccess();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 213;
	            this.ifExpression();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 214;
	            this.lambda();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 215;
	            this.builtinFunction();
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
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, biesCParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
	        _la = this._input.LA(1);
	        if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 100359) !== 0))) {
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
	}



	functionCallChain() {
	    let localctx = new FunctionCallChainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, biesCParser.RULE_functionCallChain);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.match(biesCParser.ID);
	        this.state = 221;
	        this.funtionArgs();
	        this.state = 225;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 222;
	                this.funtionArgs(); 
	            }
	            this.state = 227;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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
	}



	funtionArgs() {
	    let localctx = new FuntionArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, biesCParser.RULE_funtionArgs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.match(biesCParser.T__1);
	        this.state = 230;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2483830788) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 50687) !== 0)) {
	            this.state = 229;
	            this.argumentList();
	        }

	        this.state = 232;
	        this.match(biesCParser.T__3);
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
	}



	argumentList() {
	    let localctx = new ArgumentListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, biesCParser.RULE_argumentList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this.expression();
	        this.state = 239;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 235;
	            this.match(biesCParser.T__2);
	            this.state = 236;
	            this.expression();
	            this.state = 241;
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
	}



	params() {
	    let localctx = new ParamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, biesCParser.RULE_params);
	    var _la = 0;
	    try {
	        this.state = 255;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 242;
	            this.match(biesCParser.T__1);
	            this.state = 251;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===47) {
	                this.state = 243;
	                this.match(biesCParser.ID);
	                this.state = 248;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===3) {
	                    this.state = 244;
	                    this.match(biesCParser.T__2);
	                    this.state = 245;
	                    this.match(biesCParser.ID);
	                    this.state = 250;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 253;
	            this.match(biesCParser.T__3);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 254;
	            this.match(biesCParser.ID);
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
	}



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, biesCParser.RULE_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        this.match(biesCParser.T__18);
	        this.state = 266;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2483830788) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 50687) !== 0)) {
	            this.state = 258;
	            this.expression();
	            this.state = 263;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3) {
	                this.state = 259;
	                this.match(biesCParser.T__2);
	                this.state = 260;
	                this.expression();
	                this.state = 265;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 268;
	        this.match(biesCParser.T__19);
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
	}



	listAccess() {
	    let localctx = new ListAccessContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, biesCParser.RULE_listAccess);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.match(biesCParser.ID);
	        this.state = 271;
	        this.match(biesCParser.T__18);
	        this.state = 272;
	        this.expression();
	        this.state = 273;
	        this.match(biesCParser.T__19);
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
	}



	ifExpression() {
	    let localctx = new IfExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, biesCParser.RULE_ifExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 275;
	        this.match(biesCParser.IF);
	        this.state = 276;
	        this.match(biesCParser.T__1);
	        this.state = 277;
	        this.expression();
	        this.state = 278;
	        this.match(biesCParser.T__3);
	        this.state = 279;
	        this.thenExpr();
	        this.state = 280;
	        this.match(biesCParser.ELSE);
	        this.state = 281;
	        this.elseExpr();
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
	}



	thenExpr() {
	    let localctx = new ThenExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, biesCParser.RULE_thenExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 283;
	            this.match(biesCParser.THEN);
	        }

	        this.state = 286;
	        this.blockExpression();
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
	}



	elseExpr() {
	    let localctx = new ElseExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, biesCParser.RULE_elseExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
	        this.blockExpression();
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
	}



	letInDeclaration() {
	    let localctx = new LetInDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, biesCParser.RULE_letInDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this.match(biesCParser.LET);
	        this.state = 291;
	        this.blockDeclaration();
	        this.state = 292;
	        this.match(biesCParser.IN);
	        this.state = 293;
	        this.blockExpression();
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
	}



	blockDeclaration() {
	    let localctx = new BlockDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, biesCParser.RULE_blockDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 295;
	        this.match(biesCParser.T__20);
	        this.state = 299;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23) {
	            this.state = 296;
	            this.constDeclaration();
	            this.state = 301;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 302;
	        this.match(biesCParser.T__21);
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
	}



	blockExpression() {
	    let localctx = new BlockExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, biesCParser.RULE_blockExpression);
	    var _la = 0;
	    try {
	        this.state = 313;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 304;
	            this.match(biesCParser.T__20);
	            this.state = 308;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2542551044) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 50687) !== 0)) {
	                this.state = 305;
	                this.statement();
	                this.state = 310;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 311;
	            this.match(biesCParser.T__21);
	            break;
	        case 2:
	        case 14:
	        case 18:
	        case 19:
	        case 26:
	        case 28:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 42:
	        case 46:
	        case 47:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 312;
	            this.expression();
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
	}



	lambda() {
	    let localctx = new LambdaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, biesCParser.RULE_lambda);
	    try {
	        this.state = 320;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 47:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 315;
	            this.params();
	            this.state = 316;
	            this.match(biesCParser.ARROW);
	            this.state = 317;
	            this.blockExpression();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 319;
	            this.letInDeclaration();
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
	}



	builtinFunction() {
	    let localctx = new BuiltinFunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, biesCParser.RULE_builtinFunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 322;
	        _la = this._input.LA(1);
	        if(!(((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 127) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 323;
	        this.match(biesCParser.T__1);
	        this.state = 324;
	        this.expression();
	        this.state = 325;
	        this.match(biesCParser.T__3);
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
	}


}

biesCParser.EOF = antlr4.Token.EOF;
biesCParser.T__0 = 1;
biesCParser.T__1 = 2;
biesCParser.T__2 = 3;
biesCParser.T__3 = 4;
biesCParser.T__4 = 5;
biesCParser.T__5 = 6;
biesCParser.T__6 = 7;
biesCParser.T__7 = 8;
biesCParser.T__8 = 9;
biesCParser.T__9 = 10;
biesCParser.T__10 = 11;
biesCParser.T__11 = 12;
biesCParser.T__12 = 13;
biesCParser.T__13 = 14;
biesCParser.T__14 = 15;
biesCParser.T__15 = 16;
biesCParser.T__16 = 17;
biesCParser.T__17 = 18;
biesCParser.T__18 = 19;
biesCParser.T__19 = 20;
biesCParser.T__20 = 21;
biesCParser.T__21 = 22;
biesCParser.CONST = 23;
biesCParser.VAR = 24;
biesCParser.FUN = 25;
biesCParser.LET = 26;
biesCParser.IN = 27;
biesCParser.IF = 28;
biesCParser.THEN = 29;
biesCParser.ELSE = 30;
biesCParser.TRUE = 31;
biesCParser.FALSE = 32;
biesCParser.NULL = 33;
biesCParser.PRINT = 34;
biesCParser.INPUT = 35;
biesCParser.LEN = 36;
biesCParser.INT = 37;
biesCParser.STR = 38;
biesCParser.BOOL = 39;
biesCParser.LIST = 40;
biesCParser.ARROW = 41;
biesCParser.NUMBER = 42;
biesCParser.INTEGER = 43;
biesCParser.FLOAT = 44;
biesCParser.SCI = 45;
biesCParser.STRING = 46;
biesCParser.ID = 47;
biesCParser.LC = 48;
biesCParser.BC = 49;
biesCParser.WS = 50;

biesCParser.RULE_program = 0;
biesCParser.RULE_statement = 1;
biesCParser.RULE_declaration = 2;
biesCParser.RULE_reasignation = 3;
biesCParser.RULE_nullInitDeclaration = 4;
biesCParser.RULE_constDeclaration = 5;
biesCParser.RULE_varDeclaration = 6;
biesCParser.RULE_letDeclaration = 7;
biesCParser.RULE_funDeclaration = 8;
biesCParser.RULE_paramsFun = 9;
biesCParser.RULE_expression = 10;
biesCParser.RULE_logicalOrExpression = 11;
biesCParser.RULE_logicalAndExpression = 12;
biesCParser.RULE_equalityExpression = 13;
biesCParser.RULE_relationalExpression = 14;
biesCParser.RULE_additiveExpression = 15;
biesCParser.RULE_multiplicativeExpression = 16;
biesCParser.RULE_exponentialExpression = 17;
biesCParser.RULE_unaryExpression = 18;
biesCParser.RULE_primaryExpression = 19;
biesCParser.RULE_literal = 20;
biesCParser.RULE_functionCallChain = 21;
biesCParser.RULE_funtionArgs = 22;
biesCParser.RULE_argumentList = 23;
biesCParser.RULE_params = 24;
biesCParser.RULE_list = 25;
biesCParser.RULE_listAccess = 26;
biesCParser.RULE_ifExpression = 27;
biesCParser.RULE_thenExpr = 28;
biesCParser.RULE_elseExpr = 29;
biesCParser.RULE_letInDeclaration = 30;
biesCParser.RULE_blockDeclaration = 31;
biesCParser.RULE_blockExpression = 32;
biesCParser.RULE_lambda = 33;
biesCParser.RULE_builtinFunction = 34;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_program;
    }

	EOF() {
	    return this.getToken(biesCParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_statement;
    }

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_declaration;
    }

	constDeclaration() {
	    return this.getTypedRuleContext(ConstDeclarationContext,0);
	};

	varDeclaration() {
	    return this.getTypedRuleContext(VarDeclarationContext,0);
	};

	letDeclaration() {
	    return this.getTypedRuleContext(LetDeclarationContext,0);
	};

	funDeclaration() {
	    return this.getTypedRuleContext(FunDeclarationContext,0);
	};

	nullInitDeclaration() {
	    return this.getTypedRuleContext(NullInitDeclarationContext,0);
	};

	reasignation() {
	    return this.getTypedRuleContext(ReasignationContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReasignationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_reasignation;
    }

	ID() {
	    return this.getToken(biesCParser.ID, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitReasignation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NullInitDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_nullInitDeclaration;
    }

	VAR() {
	    return this.getToken(biesCParser.VAR, 0);
	};

	ID() {
	    return this.getToken(biesCParser.ID, 0);
	};

	LET() {
	    return this.getToken(biesCParser.LET, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitNullInitDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_constDeclaration;
    }

	CONST() {
	    return this.getToken(biesCParser.CONST, 0);
	};

	ID() {
	    return this.getToken(biesCParser.ID, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitConstDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_varDeclaration;
    }

	VAR() {
	    return this.getToken(biesCParser.VAR, 0);
	};

	ID() {
	    return this.getToken(biesCParser.ID, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitVarDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LetDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_letDeclaration;
    }

	LET() {
	    return this.getToken(biesCParser.LET, 0);
	};

	ID() {
	    return this.getToken(biesCParser.ID, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitLetDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_funDeclaration;
    }

	FUN() {
	    return this.getToken(biesCParser.FUN, 0);
	};

	ID() {
	    return this.getToken(biesCParser.ID, 0);
	};

	paramsFun() {
	    return this.getTypedRuleContext(ParamsFunContext,0);
	};

	ARROW() {
	    return this.getToken(biesCParser.ARROW, 0);
	};

	letInDeclaration() {
	    return this.getTypedRuleContext(LetInDeclarationContext,0);
	};

	blockExpression() {
	    return this.getTypedRuleContext(BlockExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitFunDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParamsFunContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_paramsFun;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesCParser.ID);
	    } else {
	        return this.getToken(biesCParser.ID, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitParamsFun(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_expression;
    }

	logicalOrExpression() {
	    return this.getTypedRuleContext(LogicalOrExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LogicalOrExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_logicalOrExpression;
    }

	logicalAndExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LogicalAndExpressionContext);
	    } else {
	        return this.getTypedRuleContext(LogicalAndExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitLogicalOrExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LogicalAndExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_logicalAndExpression;
    }

	equalityExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EqualityExpressionContext);
	    } else {
	        return this.getTypedRuleContext(EqualityExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitLogicalAndExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EqualityExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_equalityExpression;
    }

	relationalExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelationalExpressionContext);
	    } else {
	        return this.getTypedRuleContext(RelationalExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitEqualityExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RelationalExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_relationalExpression;
    }

	additiveExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditiveExpressionContext);
	    } else {
	        return this.getTypedRuleContext(AdditiveExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitRelationalExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AdditiveExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_additiveExpression;
    }

	multiplicativeExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplicativeExpressionContext);
	    } else {
	        return this.getTypedRuleContext(MultiplicativeExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitAdditiveExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiplicativeExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_multiplicativeExpression;
    }

	exponentialExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExponentialExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExponentialExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitMultiplicativeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExponentialExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_exponentialExpression;
    }

	unaryExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnaryExpressionContext);
	    } else {
	        return this.getTypedRuleContext(UnaryExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitExponentialExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UnaryExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_unaryExpression;
    }

	unaryExpression() {
	    return this.getTypedRuleContext(UnaryExpressionContext,0);
	};

	primaryExpression() {
	    return this.getTypedRuleContext(PrimaryExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitUnaryExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimaryExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_primaryExpression;
    }

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	functionCallChain() {
	    return this.getTypedRuleContext(FunctionCallChainContext,0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	listAccess() {
	    return this.getTypedRuleContext(ListAccessContext,0);
	};

	ifExpression() {
	    return this.getTypedRuleContext(IfExpressionContext,0);
	};

	lambda() {
	    return this.getTypedRuleContext(LambdaContext,0);
	};

	builtinFunction() {
	    return this.getTypedRuleContext(BuiltinFunctionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitPrimaryExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_literal;
    }

	STRING() {
	    return this.getToken(biesCParser.STRING, 0);
	};

	ID() {
	    return this.getToken(biesCParser.ID, 0);
	};

	NUMBER() {
	    return this.getToken(biesCParser.NUMBER, 0);
	};

	TRUE() {
	    return this.getToken(biesCParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(biesCParser.FALSE, 0);
	};

	NULL() {
	    return this.getToken(biesCParser.NULL, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionCallChainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_functionCallChain;
    }

	ID() {
	    return this.getToken(biesCParser.ID, 0);
	};

	funtionArgs = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuntionArgsContext);
	    } else {
	        return this.getTypedRuleContext(FuntionArgsContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitFunctionCallChain(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuntionArgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_funtionArgs;
    }

	argumentList() {
	    return this.getTypedRuleContext(ArgumentListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitFuntionArgs(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_argumentList;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitArgumentList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParamsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_params;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesCParser.ID);
	    } else {
	        return this.getToken(biesCParser.ID, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitParams(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_list;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListAccessContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_listAccess;
    }

	ID() {
	    return this.getToken(biesCParser.ID, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitListAccess(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_ifExpression;
    }

	IF() {
	    return this.getToken(biesCParser.IF, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	thenExpr() {
	    return this.getTypedRuleContext(ThenExprContext,0);
	};

	ELSE() {
	    return this.getToken(biesCParser.ELSE, 0);
	};

	elseExpr() {
	    return this.getTypedRuleContext(ElseExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitIfExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ThenExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_thenExpr;
    }

	blockExpression() {
	    return this.getTypedRuleContext(BlockExpressionContext,0);
	};

	THEN() {
	    return this.getToken(biesCParser.THEN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitThenExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_elseExpr;
    }

	blockExpression() {
	    return this.getTypedRuleContext(BlockExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitElseExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LetInDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_letInDeclaration;
    }

	LET() {
	    return this.getToken(biesCParser.LET, 0);
	};

	blockDeclaration() {
	    return this.getTypedRuleContext(BlockDeclarationContext,0);
	};

	IN() {
	    return this.getToken(biesCParser.IN, 0);
	};

	blockExpression() {
	    return this.getTypedRuleContext(BlockExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitLetInDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_blockDeclaration;
    }

	constDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConstDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(ConstDeclarationContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitBlockDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_blockExpression;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitBlockExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LambdaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_lambda;
    }

	params() {
	    return this.getTypedRuleContext(ParamsContext,0);
	};

	ARROW() {
	    return this.getToken(biesCParser.ARROW, 0);
	};

	blockExpression() {
	    return this.getTypedRuleContext(BlockExpressionContext,0);
	};

	letInDeclaration() {
	    return this.getTypedRuleContext(LetInDeclarationContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitLambda(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BuiltinFunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_builtinFunction;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	PRINT() {
	    return this.getToken(biesCParser.PRINT, 0);
	};

	INPUT() {
	    return this.getToken(biesCParser.INPUT, 0);
	};

	LEN() {
	    return this.getToken(biesCParser.LEN, 0);
	};

	INT() {
	    return this.getToken(biesCParser.INT, 0);
	};

	STR() {
	    return this.getToken(biesCParser.STR, 0);
	};

	BOOL() {
	    return this.getToken(biesCParser.BOOL, 0);
	};

	LIST() {
	    return this.getToken(biesCParser.LIST, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitBuiltinFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




biesCParser.ProgramContext = ProgramContext; 
biesCParser.StatementContext = StatementContext; 
biesCParser.DeclarationContext = DeclarationContext; 
biesCParser.ReasignationContext = ReasignationContext; 
biesCParser.NullInitDeclarationContext = NullInitDeclarationContext; 
biesCParser.ConstDeclarationContext = ConstDeclarationContext; 
biesCParser.VarDeclarationContext = VarDeclarationContext; 
biesCParser.LetDeclarationContext = LetDeclarationContext; 
biesCParser.FunDeclarationContext = FunDeclarationContext; 
biesCParser.ParamsFunContext = ParamsFunContext; 
biesCParser.ExpressionContext = ExpressionContext; 
biesCParser.LogicalOrExpressionContext = LogicalOrExpressionContext; 
biesCParser.LogicalAndExpressionContext = LogicalAndExpressionContext; 
biesCParser.EqualityExpressionContext = EqualityExpressionContext; 
biesCParser.RelationalExpressionContext = RelationalExpressionContext; 
biesCParser.AdditiveExpressionContext = AdditiveExpressionContext; 
biesCParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext; 
biesCParser.ExponentialExpressionContext = ExponentialExpressionContext; 
biesCParser.UnaryExpressionContext = UnaryExpressionContext; 
biesCParser.PrimaryExpressionContext = PrimaryExpressionContext; 
biesCParser.LiteralContext = LiteralContext; 
biesCParser.FunctionCallChainContext = FunctionCallChainContext; 
biesCParser.FuntionArgsContext = FuntionArgsContext; 
biesCParser.ArgumentListContext = ArgumentListContext; 
biesCParser.ParamsContext = ParamsContext; 
biesCParser.ListContext = ListContext; 
biesCParser.ListAccessContext = ListAccessContext; 
biesCParser.IfExpressionContext = IfExpressionContext; 
biesCParser.ThenExprContext = ThenExprContext; 
biesCParser.ElseExprContext = ElseExprContext; 
biesCParser.LetInDeclarationContext = LetInDeclarationContext; 
biesCParser.BlockDeclarationContext = BlockDeclarationContext; 
biesCParser.BlockExpressionContext = BlockExpressionContext; 
biesCParser.LambdaContext = LambdaContext; 
biesCParser.BuiltinFunctionContext = BuiltinFunctionContext; 
