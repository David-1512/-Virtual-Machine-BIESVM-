// Generated from ./grammar/biesC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import biesCVisitor from './biesCVisitor.js';

const serializedATN = [4,1,51,302,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,1,0,5,0,66,8,0,10,0,12,0,69,
9,0,1,0,1,0,1,1,1,1,3,1,75,8,1,1,2,1,2,1,2,1,2,3,2,81,8,2,1,3,1,3,1,3,1,
3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,5,
6,104,8,6,10,6,12,6,107,9,6,3,6,109,8,6,1,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,
1,8,5,8,120,8,8,10,8,12,8,123,9,8,1,9,1,9,1,9,5,9,128,8,9,10,9,12,9,131,
9,9,1,10,1,10,1,10,5,10,136,8,10,10,10,12,10,139,9,10,1,11,1,11,1,11,5,11,
144,8,11,10,11,12,11,147,9,11,1,12,1,12,1,12,5,12,152,8,12,10,12,12,12,155,
9,12,1,13,1,13,1,13,5,13,160,8,13,10,13,12,13,163,9,13,1,14,1,14,1,14,5,
14,168,8,14,10,14,12,14,171,9,14,1,15,1,15,1,15,3,15,176,8,15,1,16,1,16,
1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,189,8,16,1,17,1,17,1,18,
1,18,1,18,5,18,196,8,18,10,18,12,18,199,9,18,1,19,1,19,3,19,203,8,19,1,19,
1,19,1,20,1,20,1,20,5,20,210,8,20,10,20,12,20,213,9,20,1,21,1,21,1,21,1,
21,5,21,219,8,21,10,21,12,21,222,9,21,3,21,224,8,21,1,21,1,21,3,21,228,8,
21,1,22,1,22,1,22,1,22,5,22,234,8,22,10,22,12,22,237,9,22,3,22,239,8,22,
1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,
24,1,25,3,25,257,8,25,1,25,1,25,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,28,
1,28,1,28,1,28,5,28,272,8,28,10,28,12,28,275,9,28,1,28,1,28,1,29,1,29,5,
29,281,8,29,10,29,12,29,284,9,29,1,29,1,29,3,29,288,8,29,1,30,1,30,1,30,
1,30,1,30,3,30,295,8,30,1,31,1,31,1,31,1,31,1,31,1,31,0,0,32,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
60,62,0,7,1,0,7,8,1,0,9,12,1,0,13,14,1,0,15,16,2,0,14,14,18,18,3,0,33,33,
42,43,47,48,1,0,34,40,306,0,67,1,0,0,0,2,74,1,0,0,0,4,80,1,0,0,0,6,82,1,
0,0,0,8,87,1,0,0,0,10,92,1,0,0,0,12,97,1,0,0,0,14,114,1,0,0,0,16,116,1,0,
0,0,18,124,1,0,0,0,20,132,1,0,0,0,22,140,1,0,0,0,24,148,1,0,0,0,26,156,1,
0,0,0,28,164,1,0,0,0,30,175,1,0,0,0,32,188,1,0,0,0,34,190,1,0,0,0,36,192,
1,0,0,0,38,200,1,0,0,0,40,206,1,0,0,0,42,227,1,0,0,0,44,229,1,0,0,0,46,242,
1,0,0,0,48,247,1,0,0,0,50,256,1,0,0,0,52,260,1,0,0,0,54,262,1,0,0,0,56,267,
1,0,0,0,58,287,1,0,0,0,60,294,1,0,0,0,62,296,1,0,0,0,64,66,3,2,1,0,65,64,
1,0,0,0,66,69,1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,70,1,0,0,0,69,67,1,
0,0,0,70,71,5,0,0,1,71,1,1,0,0,0,72,75,3,4,2,0,73,75,3,14,7,0,74,72,1,0,
0,0,74,73,1,0,0,0,75,3,1,0,0,0,76,81,3,6,3,0,77,81,3,8,4,0,78,81,3,10,5,
0,79,81,3,12,6,0,80,76,1,0,0,0,80,77,1,0,0,0,80,78,1,0,0,0,80,79,1,0,0,0,
81,5,1,0,0,0,82,83,5,23,0,0,83,84,5,48,0,0,84,85,5,1,0,0,85,86,3,14,7,0,
86,7,1,0,0,0,87,88,5,24,0,0,88,89,5,48,0,0,89,90,5,1,0,0,90,91,3,14,7,0,
91,9,1,0,0,0,92,93,5,26,0,0,93,94,5,48,0,0,94,95,5,1,0,0,95,96,3,14,7,0,
96,11,1,0,0,0,97,98,5,25,0,0,98,99,5,48,0,0,99,108,5,2,0,0,100,105,5,48,
0,0,101,102,5,3,0,0,102,104,5,48,0,0,103,101,1,0,0,0,104,107,1,0,0,0,105,
103,1,0,0,0,105,106,1,0,0,0,106,109,1,0,0,0,107,105,1,0,0,0,108,100,1,0,
0,0,108,109,1,0,0,0,109,110,1,0,0,0,110,111,5,4,0,0,111,112,5,41,0,0,112,
113,3,54,27,0,113,13,1,0,0,0,114,115,3,16,8,0,115,15,1,0,0,0,116,121,3,18,
9,0,117,118,5,5,0,0,118,120,3,18,9,0,119,117,1,0,0,0,120,123,1,0,0,0,121,
119,1,0,0,0,121,122,1,0,0,0,122,17,1,0,0,0,123,121,1,0,0,0,124,129,3,20,
10,0,125,126,5,6,0,0,126,128,3,20,10,0,127,125,1,0,0,0,128,131,1,0,0,0,129,
127,1,0,0,0,129,130,1,0,0,0,130,19,1,0,0,0,131,129,1,0,0,0,132,137,3,22,
11,0,133,134,7,0,0,0,134,136,3,22,11,0,135,133,1,0,0,0,136,139,1,0,0,0,137,
135,1,0,0,0,137,138,1,0,0,0,138,21,1,0,0,0,139,137,1,0,0,0,140,145,3,24,
12,0,141,142,7,1,0,0,142,144,3,24,12,0,143,141,1,0,0,0,144,147,1,0,0,0,145,
143,1,0,0,0,145,146,1,0,0,0,146,23,1,0,0,0,147,145,1,0,0,0,148,153,3,26,
13,0,149,150,7,2,0,0,150,152,3,26,13,0,151,149,1,0,0,0,152,155,1,0,0,0,153,
151,1,0,0,0,153,154,1,0,0,0,154,25,1,0,0,0,155,153,1,0,0,0,156,161,3,28,
14,0,157,158,7,3,0,0,158,160,3,28,14,0,159,157,1,0,0,0,160,163,1,0,0,0,161,
159,1,0,0,0,161,162,1,0,0,0,162,27,1,0,0,0,163,161,1,0,0,0,164,169,3,30,
15,0,165,166,5,17,0,0,166,168,3,30,15,0,167,165,1,0,0,0,168,171,1,0,0,0,
169,167,1,0,0,0,169,170,1,0,0,0,170,29,1,0,0,0,171,169,1,0,0,0,172,173,7,
4,0,0,173,176,3,30,15,0,174,176,3,32,16,0,175,172,1,0,0,0,175,174,1,0,0,
0,176,31,1,0,0,0,177,189,3,44,22,0,178,189,3,36,18,0,179,189,3,34,17,0,180,
181,5,2,0,0,181,182,3,14,7,0,182,183,5,4,0,0,183,189,1,0,0,0,184,189,3,46,
23,0,185,189,3,48,24,0,186,189,3,60,30,0,187,189,3,62,31,0,188,177,1,0,0,
0,188,178,1,0,0,0,188,179,1,0,0,0,188,180,1,0,0,0,188,184,1,0,0,0,188,185,
1,0,0,0,188,186,1,0,0,0,188,187,1,0,0,0,189,33,1,0,0,0,190,191,7,5,0,0,191,
35,1,0,0,0,192,193,5,48,0,0,193,197,3,38,19,0,194,196,3,38,19,0,195,194,
1,0,0,0,196,199,1,0,0,0,197,195,1,0,0,0,197,198,1,0,0,0,198,37,1,0,0,0,199,
197,1,0,0,0,200,202,5,2,0,0,201,203,3,40,20,0,202,201,1,0,0,0,202,203,1,
0,0,0,203,204,1,0,0,0,204,205,5,4,0,0,205,39,1,0,0,0,206,211,3,14,7,0,207,
208,5,3,0,0,208,210,3,14,7,0,209,207,1,0,0,0,210,213,1,0,0,0,211,209,1,0,
0,0,211,212,1,0,0,0,212,41,1,0,0,0,213,211,1,0,0,0,214,223,5,2,0,0,215,220,
5,48,0,0,216,217,5,3,0,0,217,219,5,48,0,0,218,216,1,0,0,0,219,222,1,0,0,
0,220,218,1,0,0,0,220,221,1,0,0,0,221,224,1,0,0,0,222,220,1,0,0,0,223,215,
1,0,0,0,223,224,1,0,0,0,224,225,1,0,0,0,225,228,5,4,0,0,226,228,5,48,0,0,
227,214,1,0,0,0,227,226,1,0,0,0,228,43,1,0,0,0,229,238,5,19,0,0,230,235,
3,14,7,0,231,232,5,3,0,0,232,234,3,14,7,0,233,231,1,0,0,0,234,237,1,0,0,
0,235,233,1,0,0,0,235,236,1,0,0,0,236,239,1,0,0,0,237,235,1,0,0,0,238,230,
1,0,0,0,238,239,1,0,0,0,239,240,1,0,0,0,240,241,5,20,0,0,241,45,1,0,0,0,
242,243,5,48,0,0,243,244,5,19,0,0,244,245,3,14,7,0,245,246,5,20,0,0,246,
47,1,0,0,0,247,248,5,28,0,0,248,249,5,2,0,0,249,250,3,14,7,0,250,251,5,4,
0,0,251,252,3,50,25,0,252,253,5,30,0,0,253,254,3,52,26,0,254,49,1,0,0,0,
255,257,5,29,0,0,256,255,1,0,0,0,256,257,1,0,0,0,257,258,1,0,0,0,258,259,
3,58,29,0,259,51,1,0,0,0,260,261,3,58,29,0,261,53,1,0,0,0,262,263,5,26,0,
0,263,264,3,56,28,0,264,265,5,27,0,0,265,266,3,58,29,0,266,55,1,0,0,0,267,
273,5,21,0,0,268,272,3,6,3,0,269,272,3,8,4,0,270,272,3,54,27,0,271,268,1,
0,0,0,271,269,1,0,0,0,271,270,1,0,0,0,272,275,1,0,0,0,273,271,1,0,0,0,273,
274,1,0,0,0,274,276,1,0,0,0,275,273,1,0,0,0,276,277,5,22,0,0,277,57,1,0,
0,0,278,282,5,21,0,0,279,281,3,2,1,0,280,279,1,0,0,0,281,284,1,0,0,0,282,
280,1,0,0,0,282,283,1,0,0,0,283,285,1,0,0,0,284,282,1,0,0,0,285,288,5,22,
0,0,286,288,3,14,7,0,287,278,1,0,0,0,287,286,1,0,0,0,288,59,1,0,0,0,289,
290,3,42,21,0,290,291,5,41,0,0,291,292,3,58,29,0,292,295,1,0,0,0,293,295,
3,54,27,0,294,289,1,0,0,0,294,293,1,0,0,0,295,61,1,0,0,0,296,297,7,6,0,0,
297,298,5,2,0,0,298,299,3,14,7,0,299,300,5,4,0,0,300,63,1,0,0,0,28,67,74,
80,105,108,121,129,137,145,153,161,169,175,188,197,202,211,220,223,227,235,
238,256,271,273,282,287,294];


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
                             "NUMBER", "BOOLEAN", "INTEGER", "FLOAT", "SCI", 
                             "STRING", "ID", "LC", "BC", "WS" ];
    static ruleNames = [ "program", "statement", "declaration", "constDeclaration", 
                         "varDeclaration", "letDeclaration", "funDeclaration", 
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
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 395067396) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 50943) !== 0)) {
	            this.state = 64;
	            this.statement();
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 70;
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
	        this.state = 74;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 72;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 73;
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
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 23:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 76;
	            this.constDeclaration();
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
	            this.varDeclaration();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 78;
	            this.letDeclaration();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 79;
	            this.funDeclaration();
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
	    this.enterRule(localctx, 6, biesCParser.RULE_constDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(biesCParser.CONST);
	        this.state = 83;
	        this.match(biesCParser.ID);
	        this.state = 84;
	        this.match(biesCParser.T__0);
	        this.state = 85;
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
	    this.enterRule(localctx, 8, biesCParser.RULE_varDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(biesCParser.VAR);
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



	letDeclaration() {
	    let localctx = new LetDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, biesCParser.RULE_letDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(biesCParser.LET);
	        this.state = 93;
	        this.match(biesCParser.ID);
	        this.state = 94;
	        this.match(biesCParser.T__0);
	        this.state = 95;
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
	    this.enterRule(localctx, 12, biesCParser.RULE_funDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(biesCParser.FUN);
	        this.state = 98;
	        this.match(biesCParser.ID);
	        this.state = 99;
	        this.match(biesCParser.T__1);
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===48) {
	            this.state = 100;
	            this.match(biesCParser.ID);
	            this.state = 105;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3) {
	                this.state = 101;
	                this.match(biesCParser.T__2);
	                this.state = 102;
	                this.match(biesCParser.ID);
	                this.state = 107;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 110;
	        this.match(biesCParser.T__3);
	        this.state = 111;
	        this.match(biesCParser.ARROW);
	        this.state = 112;
	        this.letInDeclaration();
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
	    this.enterRule(localctx, 14, biesCParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
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
	    this.enterRule(localctx, 16, biesCParser.RULE_logicalOrExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.logicalAndExpression();
	        this.state = 121;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 117;
	                this.match(biesCParser.T__4);
	                this.state = 118;
	                this.logicalAndExpression(); 
	            }
	            this.state = 123;
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



	logicalAndExpression() {
	    let localctx = new LogicalAndExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, biesCParser.RULE_logicalAndExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.equalityExpression();
	        this.state = 129;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 125;
	                this.match(biesCParser.T__5);
	                this.state = 126;
	                this.equalityExpression(); 
	            }
	            this.state = 131;
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



	equalityExpression() {
	    let localctx = new EqualityExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, biesCParser.RULE_equalityExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.relationalExpression();
	        this.state = 137;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 133;
	                _la = this._input.LA(1);
	                if(!(_la===7 || _la===8)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 134;
	                this.relationalExpression(); 
	            }
	            this.state = 139;
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



	relationalExpression() {
	    let localctx = new RelationalExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, biesCParser.RULE_relationalExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.additiveExpression();
	        this.state = 145;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 141;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7680) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 142;
	                this.additiveExpression(); 
	            }
	            this.state = 147;
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



	additiveExpression() {
	    let localctx = new AdditiveExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, biesCParser.RULE_additiveExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.multiplicativeExpression();
	        this.state = 153;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 149;
	                _la = this._input.LA(1);
	                if(!(_la===13 || _la===14)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 150;
	                this.multiplicativeExpression(); 
	            }
	            this.state = 155;
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



	multiplicativeExpression() {
	    let localctx = new MultiplicativeExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, biesCParser.RULE_multiplicativeExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.exponentialExpression();
	        this.state = 161;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 157;
	                _la = this._input.LA(1);
	                if(!(_la===15 || _la===16)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 158;
	                this.exponentialExpression(); 
	            }
	            this.state = 163;
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



	exponentialExpression() {
	    let localctx = new ExponentialExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, biesCParser.RULE_exponentialExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.unaryExpression();
	        this.state = 169;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 165;
	                this.match(biesCParser.T__16);
	                this.state = 166;
	                this.unaryExpression(); 
	            }
	            this.state = 171;
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



	unaryExpression() {
	    let localctx = new UnaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, biesCParser.RULE_unaryExpression);
	    var _la = 0;
	    try {
	        this.state = 175;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 172;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===18)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 173;
	            this.unaryExpression();
	            break;
	        case 2:
	        case 19:
	        case 26:
	        case 28:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 42:
	        case 43:
	        case 47:
	        case 48:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 174;
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
	    this.enterRule(localctx, 32, biesCParser.RULE_primaryExpression);
	    try {
	        this.state = 188;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 177;
	            this.list();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 178;
	            this.functionCallChain();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 179;
	            this.literal();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 180;
	            this.match(biesCParser.T__1);
	            this.state = 181;
	            this.expression();
	            this.state = 182;
	            this.match(biesCParser.T__3);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 184;
	            this.listAccess();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 185;
	            this.ifExpression();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 186;
	            this.lambda();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 187;
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
	    this.enterRule(localctx, 34, biesCParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        _la = this._input.LA(1);
	        if(!(((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 50689) !== 0))) {
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
	    this.enterRule(localctx, 36, biesCParser.RULE_functionCallChain);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.match(biesCParser.ID);
	        this.state = 193;
	        this.funtionArgs();
	        this.state = 197;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 194;
	                this.funtionArgs(); 
	            }
	            this.state = 199;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
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
	    this.enterRule(localctx, 38, biesCParser.RULE_funtionArgs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this.match(biesCParser.T__1);
	        this.state = 202;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 336347140) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 50943) !== 0)) {
	            this.state = 201;
	            this.argumentList();
	        }

	        this.state = 204;
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
	    this.enterRule(localctx, 40, biesCParser.RULE_argumentList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.expression();
	        this.state = 211;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 207;
	            this.match(biesCParser.T__2);
	            this.state = 208;
	            this.expression();
	            this.state = 213;
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
	    this.enterRule(localctx, 42, biesCParser.RULE_params);
	    var _la = 0;
	    try {
	        this.state = 227;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 214;
	            this.match(biesCParser.T__1);
	            this.state = 223;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 215;
	                this.match(biesCParser.ID);
	                this.state = 220;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===3) {
	                    this.state = 216;
	                    this.match(biesCParser.T__2);
	                    this.state = 217;
	                    this.match(biesCParser.ID);
	                    this.state = 222;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 225;
	            this.match(biesCParser.T__3);
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 226;
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
	    this.enterRule(localctx, 44, biesCParser.RULE_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.match(biesCParser.T__18);
	        this.state = 238;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 336347140) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 50943) !== 0)) {
	            this.state = 230;
	            this.expression();
	            this.state = 235;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3) {
	                this.state = 231;
	                this.match(biesCParser.T__2);
	                this.state = 232;
	                this.expression();
	                this.state = 237;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 240;
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
	    this.enterRule(localctx, 46, biesCParser.RULE_listAccess);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.match(biesCParser.ID);
	        this.state = 243;
	        this.match(biesCParser.T__18);
	        this.state = 244;
	        this.expression();
	        this.state = 245;
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
	    this.enterRule(localctx, 48, biesCParser.RULE_ifExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        this.match(biesCParser.IF);
	        this.state = 248;
	        this.match(biesCParser.T__1);
	        this.state = 249;
	        this.expression();
	        this.state = 250;
	        this.match(biesCParser.T__3);
	        this.state = 251;
	        this.thenExpr();
	        this.state = 252;
	        this.match(biesCParser.ELSE);
	        this.state = 253;
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
	    this.enterRule(localctx, 50, biesCParser.RULE_thenExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 255;
	            this.match(biesCParser.THEN);
	        }

	        this.state = 258;
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
	    this.enterRule(localctx, 52, biesCParser.RULE_elseExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
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
	    this.enterRule(localctx, 54, biesCParser.RULE_letInDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.match(biesCParser.LET);
	        this.state = 263;
	        this.blockDeclaration();
	        this.state = 264;
	        this.match(biesCParser.IN);
	        this.state = 265;
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
	    this.enterRule(localctx, 56, biesCParser.RULE_blockDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this.match(biesCParser.T__20);
	        this.state = 273;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 92274688) !== 0)) {
	            this.state = 271;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 23:
	                this.state = 268;
	                this.constDeclaration();
	                break;
	            case 24:
	                this.state = 269;
	                this.varDeclaration();
	                break;
	            case 26:
	                this.state = 270;
	                this.letInDeclaration();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 275;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 276;
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
	    this.enterRule(localctx, 58, biesCParser.RULE_blockExpression);
	    var _la = 0;
	    try {
	        this.state = 287;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 278;
	            this.match(biesCParser.T__20);
	            this.state = 282;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 395067396) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 50943) !== 0)) {
	                this.state = 279;
	                this.statement();
	                this.state = 284;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 285;
	            this.match(biesCParser.T__21);
	            break;
	        case 2:
	        case 14:
	        case 18:
	        case 19:
	        case 26:
	        case 28:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 42:
	        case 43:
	        case 47:
	        case 48:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 286;
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
	    this.enterRule(localctx, 60, biesCParser.RULE_lambda);
	    try {
	        this.state = 294;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 48:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 289;
	            this.params();
	            this.state = 290;
	            this.match(biesCParser.ARROW);
	            this.state = 291;
	            this.blockExpression();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 293;
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
	    this.enterRule(localctx, 62, biesCParser.RULE_builtinFunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        _la = this._input.LA(1);
	        if(!(((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 127) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 297;
	        this.match(biesCParser.T__1);
	        this.state = 298;
	        this.expression();
	        this.state = 299;
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
biesCParser.BOOLEAN = 43;
biesCParser.INTEGER = 44;
biesCParser.FLOAT = 45;
biesCParser.SCI = 46;
biesCParser.STRING = 47;
biesCParser.ID = 48;
biesCParser.LC = 49;
biesCParser.BC = 50;
biesCParser.WS = 51;

biesCParser.RULE_program = 0;
biesCParser.RULE_statement = 1;
biesCParser.RULE_declaration = 2;
biesCParser.RULE_constDeclaration = 3;
biesCParser.RULE_varDeclaration = 4;
biesCParser.RULE_letDeclaration = 5;
biesCParser.RULE_funDeclaration = 6;
biesCParser.RULE_expression = 7;
biesCParser.RULE_logicalOrExpression = 8;
biesCParser.RULE_logicalAndExpression = 9;
biesCParser.RULE_equalityExpression = 10;
biesCParser.RULE_relationalExpression = 11;
biesCParser.RULE_additiveExpression = 12;
biesCParser.RULE_multiplicativeExpression = 13;
biesCParser.RULE_exponentialExpression = 14;
biesCParser.RULE_unaryExpression = 15;
biesCParser.RULE_primaryExpression = 16;
biesCParser.RULE_literal = 17;
biesCParser.RULE_functionCallChain = 18;
biesCParser.RULE_funtionArgs = 19;
biesCParser.RULE_argumentList = 20;
biesCParser.RULE_params = 21;
biesCParser.RULE_list = 22;
biesCParser.RULE_listAccess = 23;
biesCParser.RULE_ifExpression = 24;
biesCParser.RULE_thenExpr = 25;
biesCParser.RULE_elseExpr = 26;
biesCParser.RULE_letInDeclaration = 27;
biesCParser.RULE_blockDeclaration = 28;
biesCParser.RULE_blockExpression = 29;
biesCParser.RULE_lambda = 30;
biesCParser.RULE_builtinFunction = 31;

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

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitDeclaration(this);
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


	ARROW() {
	    return this.getToken(biesCParser.ARROW, 0);
	};

	letInDeclaration() {
	    return this.getTypedRuleContext(LetInDeclarationContext,0);
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

	BOOLEAN() {
	    return this.getToken(biesCParser.BOOLEAN, 0);
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
