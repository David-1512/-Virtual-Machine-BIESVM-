// Generated from ./grammar/biesC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import biesCVisitor from './biesCVisitor.js';

const serializedATN = [4,1,50,306,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,1,0,5,0,
70,8,0,10,0,12,0,73,9,0,1,0,1,0,1,1,1,1,3,1,79,8,1,1,2,1,2,1,2,1,2,1,2,1,
2,3,2,87,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,3,4,97,8,4,1,5,1,5,1,5,1,5,
1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,
1,10,1,10,1,10,5,10,124,8,10,10,10,12,10,127,9,10,1,11,1,11,1,11,5,11,132,
8,11,10,11,12,11,135,9,11,1,12,1,12,1,12,5,12,140,8,12,10,12,12,12,143,9,
12,1,13,1,13,1,13,5,13,148,8,13,10,13,12,13,151,9,13,1,14,1,14,1,14,5,14,
156,8,14,10,14,12,14,159,9,14,1,15,1,15,1,15,5,15,164,8,15,10,15,12,15,167,
9,15,1,16,1,16,1,16,5,16,172,8,16,10,16,12,16,175,9,16,1,17,1,17,1,17,3,
17,180,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,
193,8,18,1,19,1,19,1,20,1,20,1,20,5,20,200,8,20,10,20,12,20,203,9,20,1,21,
1,21,3,21,207,8,21,1,21,1,21,1,22,1,22,1,22,5,22,214,8,22,10,22,12,22,217,
9,22,1,23,1,23,1,23,1,23,5,23,223,8,23,10,23,12,23,226,9,23,3,23,228,8,23,
1,23,1,23,3,23,232,8,23,1,24,1,24,1,24,1,24,5,24,238,8,24,10,24,12,24,241,
9,24,3,24,243,8,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,
1,26,1,26,1,26,1,26,1,27,3,27,261,8,27,1,27,1,27,1,28,1,28,1,29,1,29,1,29,
1,29,1,29,1,30,1,30,1,30,1,30,5,30,276,8,30,10,30,12,30,279,9,30,1,30,1,
30,1,31,1,31,5,31,285,8,31,10,31,12,31,288,9,31,1,31,1,31,3,31,292,8,31,
1,32,1,32,1,32,1,32,1,32,3,32,299,8,32,1,33,1,33,1,33,1,33,1,33,1,33,0,0,
34,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,
50,52,54,56,58,60,62,64,66,0,7,1,0,4,5,1,0,6,9,1,0,10,11,1,0,12,13,2,0,11,
11,15,15,3,0,31,33,42,42,46,47,1,0,34,40,309,0,71,1,0,0,0,2,78,1,0,0,0,4,
86,1,0,0,0,6,88,1,0,0,0,8,96,1,0,0,0,10,98,1,0,0,0,12,103,1,0,0,0,14,108,
1,0,0,0,16,113,1,0,0,0,18,118,1,0,0,0,20,120,1,0,0,0,22,128,1,0,0,0,24,136,
1,0,0,0,26,144,1,0,0,0,28,152,1,0,0,0,30,160,1,0,0,0,32,168,1,0,0,0,34,179,
1,0,0,0,36,192,1,0,0,0,38,194,1,0,0,0,40,196,1,0,0,0,42,204,1,0,0,0,44,210,
1,0,0,0,46,231,1,0,0,0,48,233,1,0,0,0,50,246,1,0,0,0,52,251,1,0,0,0,54,260,
1,0,0,0,56,264,1,0,0,0,58,266,1,0,0,0,60,271,1,0,0,0,62,291,1,0,0,0,64,298,
1,0,0,0,66,300,1,0,0,0,68,70,3,2,1,0,69,68,1,0,0,0,70,73,1,0,0,0,71,69,1,
0,0,0,71,72,1,0,0,0,72,74,1,0,0,0,73,71,1,0,0,0,74,75,5,0,0,1,75,1,1,0,0,
0,76,79,3,4,2,0,77,79,3,18,9,0,78,76,1,0,0,0,78,77,1,0,0,0,79,3,1,0,0,0,
80,87,3,10,5,0,81,87,3,12,6,0,82,87,3,14,7,0,83,87,3,16,8,0,84,87,3,8,4,
0,85,87,3,6,3,0,86,80,1,0,0,0,86,81,1,0,0,0,86,82,1,0,0,0,86,83,1,0,0,0,
86,84,1,0,0,0,86,85,1,0,0,0,87,5,1,0,0,0,88,89,5,47,0,0,89,90,5,1,0,0,90,
91,3,18,9,0,91,7,1,0,0,0,92,93,5,24,0,0,93,97,5,47,0,0,94,95,5,26,0,0,95,
97,5,47,0,0,96,92,1,0,0,0,96,94,1,0,0,0,97,9,1,0,0,0,98,99,5,23,0,0,99,100,
5,47,0,0,100,101,5,1,0,0,101,102,3,18,9,0,102,11,1,0,0,0,103,104,5,24,0,
0,104,105,5,47,0,0,105,106,5,1,0,0,106,107,3,18,9,0,107,13,1,0,0,0,108,109,
5,26,0,0,109,110,5,47,0,0,110,111,5,1,0,0,111,112,3,18,9,0,112,15,1,0,0,
0,113,114,5,25,0,0,114,115,5,47,0,0,115,116,5,1,0,0,116,117,3,64,32,0,117,
17,1,0,0,0,118,119,3,20,10,0,119,19,1,0,0,0,120,125,3,22,11,0,121,122,5,
2,0,0,122,124,3,22,11,0,123,121,1,0,0,0,124,127,1,0,0,0,125,123,1,0,0,0,
125,126,1,0,0,0,126,21,1,0,0,0,127,125,1,0,0,0,128,133,3,24,12,0,129,130,
5,3,0,0,130,132,3,24,12,0,131,129,1,0,0,0,132,135,1,0,0,0,133,131,1,0,0,
0,133,134,1,0,0,0,134,23,1,0,0,0,135,133,1,0,0,0,136,141,3,26,13,0,137,138,
7,0,0,0,138,140,3,26,13,0,139,137,1,0,0,0,140,143,1,0,0,0,141,139,1,0,0,
0,141,142,1,0,0,0,142,25,1,0,0,0,143,141,1,0,0,0,144,149,3,28,14,0,145,146,
7,1,0,0,146,148,3,28,14,0,147,145,1,0,0,0,148,151,1,0,0,0,149,147,1,0,0,
0,149,150,1,0,0,0,150,27,1,0,0,0,151,149,1,0,0,0,152,157,3,30,15,0,153,154,
7,2,0,0,154,156,3,30,15,0,155,153,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,
0,157,158,1,0,0,0,158,29,1,0,0,0,159,157,1,0,0,0,160,165,3,32,16,0,161,162,
7,3,0,0,162,164,3,32,16,0,163,161,1,0,0,0,164,167,1,0,0,0,165,163,1,0,0,
0,165,166,1,0,0,0,166,31,1,0,0,0,167,165,1,0,0,0,168,173,3,34,17,0,169,170,
5,14,0,0,170,172,3,34,17,0,171,169,1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,
0,173,174,1,0,0,0,174,33,1,0,0,0,175,173,1,0,0,0,176,177,7,4,0,0,177,180,
3,34,17,0,178,180,3,36,18,0,179,176,1,0,0,0,179,178,1,0,0,0,180,35,1,0,0,
0,181,193,3,48,24,0,182,193,3,40,20,0,183,193,3,38,19,0,184,185,5,16,0,0,
185,186,3,18,9,0,186,187,5,17,0,0,187,193,1,0,0,0,188,193,3,50,25,0,189,
193,3,52,26,0,190,193,3,64,32,0,191,193,3,66,33,0,192,181,1,0,0,0,192,182,
1,0,0,0,192,183,1,0,0,0,192,184,1,0,0,0,192,188,1,0,0,0,192,189,1,0,0,0,
192,190,1,0,0,0,192,191,1,0,0,0,193,37,1,0,0,0,194,195,7,5,0,0,195,39,1,
0,0,0,196,197,5,47,0,0,197,201,3,42,21,0,198,200,3,42,21,0,199,198,1,0,0,
0,200,203,1,0,0,0,201,199,1,0,0,0,201,202,1,0,0,0,202,41,1,0,0,0,203,201,
1,0,0,0,204,206,5,16,0,0,205,207,3,44,22,0,206,205,1,0,0,0,206,207,1,0,0,
0,207,208,1,0,0,0,208,209,5,17,0,0,209,43,1,0,0,0,210,215,3,18,9,0,211,212,
5,18,0,0,212,214,3,18,9,0,213,211,1,0,0,0,214,217,1,0,0,0,215,213,1,0,0,
0,215,216,1,0,0,0,216,45,1,0,0,0,217,215,1,0,0,0,218,227,5,16,0,0,219,224,
5,47,0,0,220,221,5,18,0,0,221,223,5,47,0,0,222,220,1,0,0,0,223,226,1,0,0,
0,224,222,1,0,0,0,224,225,1,0,0,0,225,228,1,0,0,0,226,224,1,0,0,0,227,219,
1,0,0,0,227,228,1,0,0,0,228,229,1,0,0,0,229,232,5,17,0,0,230,232,5,47,0,
0,231,218,1,0,0,0,231,230,1,0,0,0,232,47,1,0,0,0,233,242,5,19,0,0,234,239,
3,18,9,0,235,236,5,18,0,0,236,238,3,18,9,0,237,235,1,0,0,0,238,241,1,0,0,
0,239,237,1,0,0,0,239,240,1,0,0,0,240,243,1,0,0,0,241,239,1,0,0,0,242,234,
1,0,0,0,242,243,1,0,0,0,243,244,1,0,0,0,244,245,5,20,0,0,245,49,1,0,0,0,
246,247,5,47,0,0,247,248,5,19,0,0,248,249,3,18,9,0,249,250,5,20,0,0,250,
51,1,0,0,0,251,252,5,28,0,0,252,253,5,16,0,0,253,254,3,18,9,0,254,255,5,
17,0,0,255,256,3,54,27,0,256,257,5,30,0,0,257,258,3,56,28,0,258,53,1,0,0,
0,259,261,5,29,0,0,260,259,1,0,0,0,260,261,1,0,0,0,261,262,1,0,0,0,262,263,
3,62,31,0,263,55,1,0,0,0,264,265,3,62,31,0,265,57,1,0,0,0,266,267,5,26,0,
0,267,268,3,60,30,0,268,269,5,27,0,0,269,270,3,62,31,0,270,59,1,0,0,0,271,
277,5,21,0,0,272,276,3,10,5,0,273,276,3,12,6,0,274,276,3,58,29,0,275,272,
1,0,0,0,275,273,1,0,0,0,275,274,1,0,0,0,276,279,1,0,0,0,277,275,1,0,0,0,
277,278,1,0,0,0,278,280,1,0,0,0,279,277,1,0,0,0,280,281,5,22,0,0,281,61,
1,0,0,0,282,286,5,21,0,0,283,285,3,2,1,0,284,283,1,0,0,0,285,288,1,0,0,0,
286,284,1,0,0,0,286,287,1,0,0,0,287,289,1,0,0,0,288,286,1,0,0,0,289,292,
5,22,0,0,290,292,3,18,9,0,291,282,1,0,0,0,291,290,1,0,0,0,292,63,1,0,0,0,
293,294,3,46,23,0,294,295,5,41,0,0,295,296,3,62,31,0,296,299,1,0,0,0,297,
299,3,58,29,0,298,293,1,0,0,0,298,297,1,0,0,0,299,65,1,0,0,0,300,301,7,6,
0,0,301,302,5,16,0,0,302,303,3,18,9,0,303,304,5,17,0,0,304,67,1,0,0,0,27,
71,78,86,96,125,133,141,149,157,165,173,179,192,201,206,215,224,227,231,
239,242,260,275,277,286,291,298];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesCParser extends antlr4.Parser {

    static grammarFileName = "biesC.g4";
    static literalNames = [ null, "'='", "'||'", "'&&'", "'=='", "'!='", 
                            "'>'", "'>='", "'<'", "'<='", "'+'", "'-'", 
                            "'*'", "'/'", "'**'", "'!'", "'('", "')'", "','", 
                            "'['", "']'", "'{'", "'}'", "'const'", "'var'", 
                            "'fun'", "'let'", "'in'", "'if'", "'then'", 
                            "'else'", "'true'", "'false'", "'null'", "'print'", 
                            "'input'", "'len'", "'int'", "'str'", "'bool'", 
                            "'list'", "'=>'" ];
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
                         "letDeclaration", "funDeclaration", "expression", 
                         "logicalOrExpression", "logicalAndExpression", 
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
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2542372864) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 50687) !== 0)) {
	            this.state = 68;
	            this.statement();
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 74;
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
	        this.state = 78;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 76;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
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
	        this.state = 86;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 80;
	            this.constDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 81;
	            this.varDeclaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 82;
	            this.letDeclaration();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 83;
	            this.funDeclaration();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 84;
	            this.nullInitDeclaration();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 85;
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
	        this.state = 88;
	        this.match(biesCParser.ID);
	        this.state = 89;
	        this.match(biesCParser.T__0);
	        this.state = 90;
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
	        this.state = 96;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 92;
	            this.match(biesCParser.VAR);
	            this.state = 93;
	            this.match(biesCParser.ID);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 94;
	            this.match(biesCParser.LET);
	            this.state = 95;
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
	        this.state = 98;
	        this.match(biesCParser.CONST);
	        this.state = 99;
	        this.match(biesCParser.ID);
	        this.state = 100;
	        this.match(biesCParser.T__0);
	        this.state = 101;
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
	        this.state = 103;
	        this.match(biesCParser.VAR);
	        this.state = 104;
	        this.match(biesCParser.ID);
	        this.state = 105;
	        this.match(biesCParser.T__0);
	        this.state = 106;
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
	        this.state = 108;
	        this.match(biesCParser.LET);
	        this.state = 109;
	        this.match(biesCParser.ID);
	        this.state = 110;
	        this.match(biesCParser.T__0);
	        this.state = 111;
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(biesCParser.FUN);
	        this.state = 114;
	        this.match(biesCParser.ID);
	        this.state = 115;
	        this.match(biesCParser.T__0);
	        this.state = 116;
	        this.lambda();
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
	    this.enterRule(localctx, 18, biesCParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
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
	    this.enterRule(localctx, 20, biesCParser.RULE_logicalOrExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.logicalAndExpression();
	        this.state = 125;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 121;
	                this.match(biesCParser.T__1);
	                this.state = 122;
	                this.logicalAndExpression(); 
	            }
	            this.state = 127;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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
	    this.enterRule(localctx, 22, biesCParser.RULE_logicalAndExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.equalityExpression();
	        this.state = 133;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 129;
	                this.match(biesCParser.T__2);
	                this.state = 130;
	                this.equalityExpression(); 
	            }
	            this.state = 135;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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
	    this.enterRule(localctx, 24, biesCParser.RULE_equalityExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.relationalExpression();
	        this.state = 141;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 137;
	                _la = this._input.LA(1);
	                if(!(_la===4 || _la===5)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 138;
	                this.relationalExpression(); 
	            }
	            this.state = 143;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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
	    this.enterRule(localctx, 26, biesCParser.RULE_relationalExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.additiveExpression();
	        this.state = 149;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 145;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 960) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 146;
	                this.additiveExpression(); 
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



	additiveExpression() {
	    let localctx = new AdditiveExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, biesCParser.RULE_additiveExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.multiplicativeExpression();
	        this.state = 157;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 153;
	                _la = this._input.LA(1);
	                if(!(_la===10 || _la===11)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 154;
	                this.multiplicativeExpression(); 
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



	multiplicativeExpression() {
	    let localctx = new MultiplicativeExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, biesCParser.RULE_multiplicativeExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.exponentialExpression();
	        this.state = 165;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 161;
	                _la = this._input.LA(1);
	                if(!(_la===12 || _la===13)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 162;
	                this.exponentialExpression(); 
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



	exponentialExpression() {
	    let localctx = new ExponentialExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, biesCParser.RULE_exponentialExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.unaryExpression();
	        this.state = 173;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 169;
	                this.match(biesCParser.T__13);
	                this.state = 170;
	                this.unaryExpression(); 
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



	unaryExpression() {
	    let localctx = new UnaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, biesCParser.RULE_unaryExpression);
	    var _la = 0;
	    try {
	        this.state = 179;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 176;
	            _la = this._input.LA(1);
	            if(!(_la===11 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 177;
	            this.unaryExpression();
	            break;
	        case 16:
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
	            this.state = 178;
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
	    this.enterRule(localctx, 36, biesCParser.RULE_primaryExpression);
	    try {
	        this.state = 192;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 181;
	            this.list();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 182;
	            this.functionCallChain();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 183;
	            this.literal();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 184;
	            this.match(biesCParser.T__15);
	            this.state = 185;
	            this.expression();
	            this.state = 186;
	            this.match(biesCParser.T__16);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 188;
	            this.listAccess();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 189;
	            this.ifExpression();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 190;
	            this.lambda();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 191;
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
	    this.enterRule(localctx, 38, biesCParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
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
	    this.enterRule(localctx, 40, biesCParser.RULE_functionCallChain);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.match(biesCParser.ID);
	        this.state = 197;
	        this.funtionArgs();
	        this.state = 201;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 198;
	                this.funtionArgs(); 
	            }
	            this.state = 203;
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



	funtionArgs() {
	    let localctx = new FuntionArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, biesCParser.RULE_funtionArgs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.match(biesCParser.T__15);
	        this.state = 206;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2483652608) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 50687) !== 0)) {
	            this.state = 205;
	            this.argumentList();
	        }

	        this.state = 208;
	        this.match(biesCParser.T__16);
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
	    this.enterRule(localctx, 44, biesCParser.RULE_argumentList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.expression();
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===18) {
	            this.state = 211;
	            this.match(biesCParser.T__17);
	            this.state = 212;
	            this.expression();
	            this.state = 217;
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
	    this.enterRule(localctx, 46, biesCParser.RULE_params);
	    var _la = 0;
	    try {
	        this.state = 231;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 218;
	            this.match(biesCParser.T__15);
	            this.state = 227;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===47) {
	                this.state = 219;
	                this.match(biesCParser.ID);
	                this.state = 224;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===18) {
	                    this.state = 220;
	                    this.match(biesCParser.T__17);
	                    this.state = 221;
	                    this.match(biesCParser.ID);
	                    this.state = 226;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 229;
	            this.match(biesCParser.T__16);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 230;
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
	    this.enterRule(localctx, 48, biesCParser.RULE_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        this.match(biesCParser.T__18);
	        this.state = 242;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2483652608) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 50687) !== 0)) {
	            this.state = 234;
	            this.expression();
	            this.state = 239;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===18) {
	                this.state = 235;
	                this.match(biesCParser.T__17);
	                this.state = 236;
	                this.expression();
	                this.state = 241;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 244;
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
	    this.enterRule(localctx, 50, biesCParser.RULE_listAccess);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.match(biesCParser.ID);
	        this.state = 247;
	        this.match(biesCParser.T__18);
	        this.state = 248;
	        this.expression();
	        this.state = 249;
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
	    this.enterRule(localctx, 52, biesCParser.RULE_ifExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 251;
	        this.match(biesCParser.IF);
	        this.state = 252;
	        this.match(biesCParser.T__15);
	        this.state = 253;
	        this.expression();
	        this.state = 254;
	        this.match(biesCParser.T__16);
	        this.state = 255;
	        this.thenExpr();
	        this.state = 256;
	        this.match(biesCParser.ELSE);
	        this.state = 257;
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
	    this.enterRule(localctx, 54, biesCParser.RULE_thenExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 259;
	            this.match(biesCParser.THEN);
	        }

	        this.state = 262;
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
	    this.enterRule(localctx, 56, biesCParser.RULE_elseExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
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
	    this.enterRule(localctx, 58, biesCParser.RULE_letInDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 266;
	        this.match(biesCParser.LET);
	        this.state = 267;
	        this.blockDeclaration();
	        this.state = 268;
	        this.match(biesCParser.IN);
	        this.state = 269;
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
	    this.enterRule(localctx, 60, biesCParser.RULE_blockDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        this.match(biesCParser.T__20);
	        this.state = 277;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 92274688) !== 0)) {
	            this.state = 275;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 23:
	                this.state = 272;
	                this.constDeclaration();
	                break;
	            case 24:
	                this.state = 273;
	                this.varDeclaration();
	                break;
	            case 26:
	                this.state = 274;
	                this.letInDeclaration();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 279;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 280;
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
	    this.enterRule(localctx, 62, biesCParser.RULE_blockExpression);
	    var _la = 0;
	    try {
	        this.state = 291;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 282;
	            this.match(biesCParser.T__20);
	            this.state = 286;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2542372864) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 50687) !== 0)) {
	                this.state = 283;
	                this.statement();
	                this.state = 288;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 289;
	            this.match(biesCParser.T__21);
	            break;
	        case 11:
	        case 15:
	        case 16:
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
	            this.state = 290;
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
	    this.enterRule(localctx, 64, biesCParser.RULE_lambda);
	    try {
	        this.state = 298;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	        case 47:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 293;
	            this.params();
	            this.state = 294;
	            this.match(biesCParser.ARROW);
	            this.state = 295;
	            this.blockExpression();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 297;
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
	    this.enterRule(localctx, 66, biesCParser.RULE_builtinFunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        _la = this._input.LA(1);
	        if(!(((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 127) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 301;
	        this.match(biesCParser.T__15);
	        this.state = 302;
	        this.expression();
	        this.state = 303;
	        this.match(biesCParser.T__16);
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
biesCParser.RULE_expression = 9;
biesCParser.RULE_logicalOrExpression = 10;
biesCParser.RULE_logicalAndExpression = 11;
biesCParser.RULE_equalityExpression = 12;
biesCParser.RULE_relationalExpression = 13;
biesCParser.RULE_additiveExpression = 14;
biesCParser.RULE_multiplicativeExpression = 15;
biesCParser.RULE_exponentialExpression = 16;
biesCParser.RULE_unaryExpression = 17;
biesCParser.RULE_primaryExpression = 18;
biesCParser.RULE_literal = 19;
biesCParser.RULE_functionCallChain = 20;
biesCParser.RULE_funtionArgs = 21;
biesCParser.RULE_argumentList = 22;
biesCParser.RULE_params = 23;
biesCParser.RULE_list = 24;
biesCParser.RULE_listAccess = 25;
biesCParser.RULE_ifExpression = 26;
biesCParser.RULE_thenExpr = 27;
biesCParser.RULE_elseExpr = 28;
biesCParser.RULE_letInDeclaration = 29;
biesCParser.RULE_blockDeclaration = 30;
biesCParser.RULE_blockExpression = 31;
biesCParser.RULE_lambda = 32;
biesCParser.RULE_builtinFunction = 33;

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

	lambda() {
	    return this.getTypedRuleContext(LambdaContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitFunDeclaration(this);
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

	varDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(VarDeclarationContext,i);
	    }
	};

	letInDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LetInDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(LetInDeclarationContext,i);
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
