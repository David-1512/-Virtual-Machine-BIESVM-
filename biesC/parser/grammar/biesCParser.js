// Generated from ./grammar/biesC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import biesCVisitor from './biesCVisitor.js';

const serializedATN = [4,1,51,290,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,1,0,5,0,64,8,0,10,0,12,0,67,9,0,1,0,1,
0,1,1,1,1,3,1,73,8,1,1,2,1,2,1,2,1,2,3,2,79,8,2,1,3,1,3,1,3,1,3,1,3,1,4,
1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,
1,8,5,8,106,8,8,10,8,12,8,109,9,8,1,9,1,9,1,9,5,9,114,8,9,10,9,12,9,117,
9,9,1,10,1,10,1,10,5,10,122,8,10,10,10,12,10,125,9,10,1,11,1,11,1,11,5,11,
130,8,11,10,11,12,11,133,9,11,1,12,1,12,1,12,5,12,138,8,12,10,12,12,12,141,
9,12,1,13,1,13,1,13,5,13,146,8,13,10,13,12,13,149,9,13,1,14,1,14,1,14,5,
14,154,8,14,10,14,12,14,157,9,14,1,15,1,15,1,15,3,15,162,8,15,1,16,1,16,
1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,175,8,16,1,17,1,17,1,18,
1,18,1,18,3,18,182,8,18,1,18,1,18,1,18,3,18,187,8,18,1,18,5,18,190,8,18,
10,18,12,18,193,9,18,1,19,1,19,1,19,5,19,198,8,19,10,19,12,19,201,9,19,1,
20,1,20,1,20,1,20,5,20,207,8,20,10,20,12,20,210,9,20,3,20,212,8,20,1,20,
1,20,3,20,216,8,20,1,21,1,21,1,21,1,21,5,21,222,8,21,10,21,12,21,225,9,21,
3,21,227,8,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,
1,23,1,23,1,23,1,24,3,24,245,8,24,1,24,1,24,1,25,1,25,1,26,1,26,1,26,1,26,
1,26,1,27,1,27,1,27,1,27,5,27,260,8,27,10,27,12,27,263,9,27,1,27,1,27,1,
28,1,28,5,28,269,8,28,10,28,12,28,272,9,28,1,28,1,28,3,28,276,8,28,1,29,
1,29,1,29,1,29,1,29,3,29,283,8,29,1,30,1,30,1,30,1,30,1,30,1,30,0,0,31,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,
54,56,58,60,0,7,1,0,4,5,1,0,6,9,1,0,10,11,1,0,12,13,2,0,11,11,15,15,3,0,
33,33,42,43,47,48,1,0,34,40,294,0,65,1,0,0,0,2,72,1,0,0,0,4,78,1,0,0,0,6,
80,1,0,0,0,8,85,1,0,0,0,10,90,1,0,0,0,12,95,1,0,0,0,14,100,1,0,0,0,16,102,
1,0,0,0,18,110,1,0,0,0,20,118,1,0,0,0,22,126,1,0,0,0,24,134,1,0,0,0,26,142,
1,0,0,0,28,150,1,0,0,0,30,161,1,0,0,0,32,174,1,0,0,0,34,176,1,0,0,0,36,178,
1,0,0,0,38,194,1,0,0,0,40,215,1,0,0,0,42,217,1,0,0,0,44,230,1,0,0,0,46,235,
1,0,0,0,48,244,1,0,0,0,50,248,1,0,0,0,52,250,1,0,0,0,54,255,1,0,0,0,56,275,
1,0,0,0,58,282,1,0,0,0,60,284,1,0,0,0,62,64,3,2,1,0,63,62,1,0,0,0,64,67,
1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,68,1,0,0,0,67,65,1,0,0,0,68,69,5,
0,0,1,69,1,1,0,0,0,70,73,3,4,2,0,71,73,3,14,7,0,72,70,1,0,0,0,72,71,1,0,
0,0,73,3,1,0,0,0,74,79,3,6,3,0,75,79,3,8,4,0,76,79,3,10,5,0,77,79,3,12,6,
0,78,74,1,0,0,0,78,75,1,0,0,0,78,76,1,0,0,0,78,77,1,0,0,0,79,5,1,0,0,0,80,
81,5,23,0,0,81,82,5,48,0,0,82,83,5,1,0,0,83,84,3,14,7,0,84,7,1,0,0,0,85,
86,5,24,0,0,86,87,5,48,0,0,87,88,5,1,0,0,88,89,3,14,7,0,89,9,1,0,0,0,90,
91,5,26,0,0,91,92,5,48,0,0,92,93,5,1,0,0,93,94,3,14,7,0,94,11,1,0,0,0,95,
96,5,25,0,0,96,97,5,48,0,0,97,98,5,1,0,0,98,99,3,58,29,0,99,13,1,0,0,0,100,
101,3,16,8,0,101,15,1,0,0,0,102,107,3,18,9,0,103,104,5,2,0,0,104,106,3,18,
9,0,105,103,1,0,0,0,106,109,1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,
17,1,0,0,0,109,107,1,0,0,0,110,115,3,20,10,0,111,112,5,3,0,0,112,114,3,20,
10,0,113,111,1,0,0,0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,
19,1,0,0,0,117,115,1,0,0,0,118,123,3,22,11,0,119,120,7,0,0,0,120,122,3,22,
11,0,121,119,1,0,0,0,122,125,1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,
21,1,0,0,0,125,123,1,0,0,0,126,131,3,24,12,0,127,128,7,1,0,0,128,130,3,24,
12,0,129,127,1,0,0,0,130,133,1,0,0,0,131,129,1,0,0,0,131,132,1,0,0,0,132,
23,1,0,0,0,133,131,1,0,0,0,134,139,3,26,13,0,135,136,7,2,0,0,136,138,3,26,
13,0,137,135,1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,0,139,140,1,0,0,0,140,
25,1,0,0,0,141,139,1,0,0,0,142,147,3,28,14,0,143,144,7,3,0,0,144,146,3,28,
14,0,145,143,1,0,0,0,146,149,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,
27,1,0,0,0,149,147,1,0,0,0,150,155,3,30,15,0,151,152,5,14,0,0,152,154,3,
30,15,0,153,151,1,0,0,0,154,157,1,0,0,0,155,153,1,0,0,0,155,156,1,0,0,0,
156,29,1,0,0,0,157,155,1,0,0,0,158,159,7,4,0,0,159,162,3,30,15,0,160,162,
3,32,16,0,161,158,1,0,0,0,161,160,1,0,0,0,162,31,1,0,0,0,163,175,3,42,21,
0,164,175,3,36,18,0,165,175,3,34,17,0,166,167,5,16,0,0,167,168,3,14,7,0,
168,169,5,17,0,0,169,175,1,0,0,0,170,175,3,44,22,0,171,175,3,46,23,0,172,
175,3,58,29,0,173,175,3,60,30,0,174,163,1,0,0,0,174,164,1,0,0,0,174,165,
1,0,0,0,174,166,1,0,0,0,174,170,1,0,0,0,174,171,1,0,0,0,174,172,1,0,0,0,
174,173,1,0,0,0,175,33,1,0,0,0,176,177,7,5,0,0,177,35,1,0,0,0,178,179,5,
48,0,0,179,181,5,16,0,0,180,182,3,38,19,0,181,180,1,0,0,0,181,182,1,0,0,
0,182,183,1,0,0,0,183,191,5,17,0,0,184,186,5,16,0,0,185,187,3,38,19,0,186,
185,1,0,0,0,186,187,1,0,0,0,187,188,1,0,0,0,188,190,5,17,0,0,189,184,1,0,
0,0,190,193,1,0,0,0,191,189,1,0,0,0,191,192,1,0,0,0,192,37,1,0,0,0,193,191,
1,0,0,0,194,199,3,14,7,0,195,196,5,18,0,0,196,198,3,14,7,0,197,195,1,0,0,
0,198,201,1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,39,1,0,0,0,201,199,
1,0,0,0,202,211,5,16,0,0,203,208,5,48,0,0,204,205,5,18,0,0,205,207,5,48,
0,0,206,204,1,0,0,0,207,210,1,0,0,0,208,206,1,0,0,0,208,209,1,0,0,0,209,
212,1,0,0,0,210,208,1,0,0,0,211,203,1,0,0,0,211,212,1,0,0,0,212,213,1,0,
0,0,213,216,5,17,0,0,214,216,5,48,0,0,215,202,1,0,0,0,215,214,1,0,0,0,216,
41,1,0,0,0,217,226,5,19,0,0,218,223,3,14,7,0,219,220,5,18,0,0,220,222,3,
14,7,0,221,219,1,0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,0,224,
227,1,0,0,0,225,223,1,0,0,0,226,218,1,0,0,0,226,227,1,0,0,0,227,228,1,0,
0,0,228,229,5,20,0,0,229,43,1,0,0,0,230,231,5,48,0,0,231,232,5,19,0,0,232,
233,3,14,7,0,233,234,5,20,0,0,234,45,1,0,0,0,235,236,5,28,0,0,236,237,5,
16,0,0,237,238,3,14,7,0,238,239,5,17,0,0,239,240,3,48,24,0,240,241,5,30,
0,0,241,242,3,50,25,0,242,47,1,0,0,0,243,245,5,29,0,0,244,243,1,0,0,0,244,
245,1,0,0,0,245,246,1,0,0,0,246,247,3,56,28,0,247,49,1,0,0,0,248,249,3,56,
28,0,249,51,1,0,0,0,250,251,5,26,0,0,251,252,3,54,27,0,252,253,5,27,0,0,
253,254,3,56,28,0,254,53,1,0,0,0,255,261,5,21,0,0,256,260,3,6,3,0,257,260,
3,8,4,0,258,260,3,52,26,0,259,256,1,0,0,0,259,257,1,0,0,0,259,258,1,0,0,
0,260,263,1,0,0,0,261,259,1,0,0,0,261,262,1,0,0,0,262,264,1,0,0,0,263,261,
1,0,0,0,264,265,5,22,0,0,265,55,1,0,0,0,266,270,5,21,0,0,267,269,3,2,1,0,
268,267,1,0,0,0,269,272,1,0,0,0,270,268,1,0,0,0,270,271,1,0,0,0,271,273,
1,0,0,0,272,270,1,0,0,0,273,276,5,22,0,0,274,276,3,14,7,0,275,266,1,0,0,
0,275,274,1,0,0,0,276,57,1,0,0,0,277,278,3,40,20,0,278,279,5,41,0,0,279,
280,3,56,28,0,280,283,1,0,0,0,281,283,3,52,26,0,282,277,1,0,0,0,282,281,
1,0,0,0,283,59,1,0,0,0,284,285,7,6,0,0,285,286,5,16,0,0,286,287,3,14,7,0,
287,288,5,17,0,0,288,61,1,0,0,0,27,65,72,78,107,115,123,131,139,147,155,
161,174,181,186,191,199,208,211,215,223,226,244,259,261,270,275,282];


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
                             "NUMBER", "BOOLEAN", "INTEGER", "FLOAT", "SCI", 
                             "STRING", "ID", "LC", "BC", "WS" ];
    static ruleNames = [ "program", "statement", "declaration", "constDeclaration", 
                         "varDeclaration", "letDeclaration", "funDeclaration", 
                         "expression", "logicalOrExpression", "logicalAndExpression", 
                         "equalityExpression", "relationalExpression", "additiveExpression", 
                         "multiplicativeExpression", "exponentialExpression", 
                         "unaryExpression", "primaryExpression", "literal", 
                         "functionCallChain", "argumentList", "params", 
                         "list", "listAccess", "ifExpression", "thenExpr", 
                         "elseExpr", "letInDeclaration", "blockDeclaration", 
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
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 394889216) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 50943) !== 0)) {
	            this.state = 62;
	            this.statement();
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 68;
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
	        this.state = 72;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 70;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
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
	        this.state = 78;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 23:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 74;
	            this.constDeclaration();
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 75;
	            this.varDeclaration();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 76;
	            this.letDeclaration();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 77;
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
	        this.state = 80;
	        this.match(biesCParser.CONST);
	        this.state = 81;
	        this.match(biesCParser.ID);
	        this.state = 82;
	        this.match(biesCParser.T__0);
	        this.state = 83;
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
	        this.state = 85;
	        this.match(biesCParser.VAR);
	        this.state = 86;
	        this.match(biesCParser.ID);
	        this.state = 87;
	        this.match(biesCParser.T__0);
	        this.state = 88;
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
	        this.state = 90;
	        this.match(biesCParser.LET);
	        this.state = 91;
	        this.match(biesCParser.ID);
	        this.state = 92;
	        this.match(biesCParser.T__0);
	        this.state = 93;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(biesCParser.FUN);
	        this.state = 96;
	        this.match(biesCParser.ID);
	        this.state = 97;
	        this.match(biesCParser.T__0);
	        this.state = 98;
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
	    this.enterRule(localctx, 14, biesCParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
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
	        this.state = 102;
	        this.logicalAndExpression();
	        this.state = 107;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 103;
	                this.match(biesCParser.T__1);
	                this.state = 104;
	                this.logicalAndExpression(); 
	            }
	            this.state = 109;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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
	        this.state = 110;
	        this.equalityExpression();
	        this.state = 115;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 111;
	                this.match(biesCParser.T__2);
	                this.state = 112;
	                this.equalityExpression(); 
	            }
	            this.state = 117;
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



	equalityExpression() {
	    let localctx = new EqualityExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, biesCParser.RULE_equalityExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.relationalExpression();
	        this.state = 123;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 119;
	                _la = this._input.LA(1);
	                if(!(_la===4 || _la===5)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 120;
	                this.relationalExpression(); 
	            }
	            this.state = 125;
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



	relationalExpression() {
	    let localctx = new RelationalExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, biesCParser.RULE_relationalExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.additiveExpression();
	        this.state = 131;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 127;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 960) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 128;
	                this.additiveExpression(); 
	            }
	            this.state = 133;
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



	additiveExpression() {
	    let localctx = new AdditiveExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, biesCParser.RULE_additiveExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.multiplicativeExpression();
	        this.state = 139;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 135;
	                _la = this._input.LA(1);
	                if(!(_la===10 || _la===11)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 136;
	                this.multiplicativeExpression(); 
	            }
	            this.state = 141;
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



	multiplicativeExpression() {
	    let localctx = new MultiplicativeExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, biesCParser.RULE_multiplicativeExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.exponentialExpression();
	        this.state = 147;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 143;
	                _la = this._input.LA(1);
	                if(!(_la===12 || _la===13)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 144;
	                this.exponentialExpression(); 
	            }
	            this.state = 149;
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



	exponentialExpression() {
	    let localctx = new ExponentialExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, biesCParser.RULE_exponentialExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.unaryExpression();
	        this.state = 155;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 151;
	                this.match(biesCParser.T__13);
	                this.state = 152;
	                this.unaryExpression(); 
	            }
	            this.state = 157;
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



	unaryExpression() {
	    let localctx = new UnaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, biesCParser.RULE_unaryExpression);
	    var _la = 0;
	    try {
	        this.state = 161;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 158;
	            _la = this._input.LA(1);
	            if(!(_la===11 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 159;
	            this.unaryExpression();
	            break;
	        case 16:
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
	            this.state = 160;
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
	        this.state = 174;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 163;
	            this.list();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 164;
	            this.functionCallChain();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 165;
	            this.literal();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 166;
	            this.match(biesCParser.T__15);
	            this.state = 167;
	            this.expression();
	            this.state = 168;
	            this.match(biesCParser.T__16);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 170;
	            this.listAccess();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 171;
	            this.ifExpression();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 172;
	            this.lambda();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 173;
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
	        this.state = 176;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(biesCParser.ID);
	        this.state = 179;
	        this.match(biesCParser.T__15);
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 336168960) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 50943) !== 0)) {
	            this.state = 180;
	            this.argumentList();
	        }

	        this.state = 183;
	        this.match(biesCParser.T__16);
	        this.state = 191;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 184;
	                this.match(biesCParser.T__15);
	                this.state = 186;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if((((_la) & ~0x1f) === 0 && ((1 << _la) & 336168960) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 50943) !== 0)) {
	                    this.state = 185;
	                    this.argumentList();
	                }

	                this.state = 188;
	                this.match(biesCParser.T__16); 
	            }
	            this.state = 193;
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



	argumentList() {
	    let localctx = new ArgumentListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, biesCParser.RULE_argumentList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.expression();
	        this.state = 199;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===18) {
	            this.state = 195;
	            this.match(biesCParser.T__17);
	            this.state = 196;
	            this.expression();
	            this.state = 201;
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
	    this.enterRule(localctx, 40, biesCParser.RULE_params);
	    var _la = 0;
	    try {
	        this.state = 215;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 202;
	            this.match(biesCParser.T__15);
	            this.state = 211;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 203;
	                this.match(biesCParser.ID);
	                this.state = 208;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===18) {
	                    this.state = 204;
	                    this.match(biesCParser.T__17);
	                    this.state = 205;
	                    this.match(biesCParser.ID);
	                    this.state = 210;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 213;
	            this.match(biesCParser.T__16);
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 214;
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
	    this.enterRule(localctx, 42, biesCParser.RULE_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.match(biesCParser.T__18);
	        this.state = 226;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 336168960) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 50943) !== 0)) {
	            this.state = 218;
	            this.expression();
	            this.state = 223;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===18) {
	                this.state = 219;
	                this.match(biesCParser.T__17);
	                this.state = 220;
	                this.expression();
	                this.state = 225;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 228;
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
	    this.enterRule(localctx, 44, biesCParser.RULE_listAccess);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        this.match(biesCParser.ID);
	        this.state = 231;
	        this.match(biesCParser.T__18);
	        this.state = 232;
	        this.expression();
	        this.state = 233;
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
	    this.enterRule(localctx, 46, biesCParser.RULE_ifExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.match(biesCParser.IF);
	        this.state = 236;
	        this.match(biesCParser.T__15);
	        this.state = 237;
	        this.expression();
	        this.state = 238;
	        this.match(biesCParser.T__16);
	        this.state = 239;
	        this.thenExpr();
	        this.state = 240;
	        this.match(biesCParser.ELSE);
	        this.state = 241;
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
	    this.enterRule(localctx, 48, biesCParser.RULE_thenExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 243;
	            this.match(biesCParser.THEN);
	        }

	        this.state = 246;
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
	    this.enterRule(localctx, 50, biesCParser.RULE_elseExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
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
	    this.enterRule(localctx, 52, biesCParser.RULE_letInDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        this.match(biesCParser.LET);
	        this.state = 251;
	        this.blockDeclaration();
	        this.state = 252;
	        this.match(biesCParser.IN);
	        this.state = 253;
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
	    this.enterRule(localctx, 54, biesCParser.RULE_blockDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 255;
	        this.match(biesCParser.T__20);
	        this.state = 261;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 92274688) !== 0)) {
	            this.state = 259;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 23:
	                this.state = 256;
	                this.constDeclaration();
	                break;
	            case 24:
	                this.state = 257;
	                this.varDeclaration();
	                break;
	            case 26:
	                this.state = 258;
	                this.letInDeclaration();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 263;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 264;
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
	    this.enterRule(localctx, 56, biesCParser.RULE_blockExpression);
	    var _la = 0;
	    try {
	        this.state = 275;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 266;
	            this.match(biesCParser.T__20);
	            this.state = 270;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 394889216) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 50943) !== 0)) {
	                this.state = 267;
	                this.statement();
	                this.state = 272;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 273;
	            this.match(biesCParser.T__21);
	            break;
	        case 11:
	        case 15:
	        case 16:
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
	            this.state = 274;
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
	    this.enterRule(localctx, 58, biesCParser.RULE_lambda);
	    try {
	        this.state = 282;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	        case 48:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 277;
	            this.params();
	            this.state = 278;
	            this.match(biesCParser.ARROW);
	            this.state = 279;
	            this.blockExpression();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 281;
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
	    this.enterRule(localctx, 60, biesCParser.RULE_builtinFunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        _la = this._input.LA(1);
	        if(!(((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 127) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 285;
	        this.match(biesCParser.T__15);
	        this.state = 286;
	        this.expression();
	        this.state = 287;
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
biesCParser.RULE_argumentList = 19;
biesCParser.RULE_params = 20;
biesCParser.RULE_list = 21;
biesCParser.RULE_listAccess = 22;
biesCParser.RULE_ifExpression = 23;
biesCParser.RULE_thenExpr = 24;
biesCParser.RULE_elseExpr = 25;
biesCParser.RULE_letInDeclaration = 26;
biesCParser.RULE_blockDeclaration = 27;
biesCParser.RULE_blockExpression = 28;
biesCParser.RULE_lambda = 29;
biesCParser.RULE_builtinFunction = 30;

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

	argumentList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentListContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentListContext,i);
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
