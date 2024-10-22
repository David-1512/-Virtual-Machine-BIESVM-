// Generated from ./grammar/biesC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import biesCVisitor from './biesCVisitor.js';

const serializedATN = [4,1,40,151,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,0,1,0,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,5,1,31,8,1,10,1,12,1,34,9,1,3,1,36,8,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,54,8,1,10,1,12,1,57,
9,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,65,8,1,11,1,12,1,66,1,1,1,1,1,1,3,1,72,8,
1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,3,3,96,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,107,
8,3,10,3,12,3,110,9,3,1,4,1,4,1,4,1,4,5,4,116,8,4,10,4,12,4,119,9,4,3,4,
121,8,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,5,5,131,8,5,10,5,12,5,134,9,5,3,
5,136,8,5,1,5,1,5,1,6,1,6,5,6,142,8,6,10,6,12,6,145,9,6,1,6,1,6,1,7,1,7,
1,7,0,1,6,8,0,2,4,6,8,10,12,14,0,4,2,0,9,9,14,14,1,0,16,17,1,0,18,19,1,0,
20,25,169,0,17,1,0,0,0,2,71,1,0,0,0,4,73,1,0,0,0,6,95,1,0,0,0,8,111,1,0,
0,0,10,126,1,0,0,0,12,139,1,0,0,0,14,148,1,0,0,0,16,18,3,2,1,0,17,16,1,0,
0,0,18,19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,21,1,0,0,0,21,22,5,0,0,
1,22,1,1,0,0,0,23,72,3,4,2,0,24,25,5,1,0,0,25,26,3,14,7,0,26,35,5,2,0,0,
27,32,3,14,7,0,28,29,5,3,0,0,29,31,3,14,7,0,30,28,1,0,0,0,31,34,1,0,0,0,
32,30,1,0,0,0,32,33,1,0,0,0,33,36,1,0,0,0,34,32,1,0,0,0,35,27,1,0,0,0,35,
36,1,0,0,0,36,37,1,0,0,0,37,38,5,4,0,0,38,39,5,5,0,0,39,40,3,12,6,0,40,72,
1,0,0,0,41,42,5,6,0,0,42,43,5,2,0,0,43,44,3,6,3,0,44,45,5,4,0,0,45,46,5,
7,0,0,46,47,3,12,6,0,47,48,5,8,0,0,48,49,3,12,6,0,49,72,1,0,0,0,50,51,5,
9,0,0,51,55,5,10,0,0,52,54,3,4,2,0,53,52,1,0,0,0,54,57,1,0,0,0,55,53,1,0,
0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,55,1,0,0,0,58,59,5,11,0,0,59,60,5,12,
0,0,60,72,3,12,6,0,61,62,5,13,0,0,62,64,5,2,0,0,63,65,3,6,3,0,64,63,1,0,
0,0,65,66,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,68,1,0,0,0,68,69,5,4,0,
0,69,72,1,0,0,0,70,72,3,12,6,0,71,23,1,0,0,0,71,24,1,0,0,0,71,41,1,0,0,0,
71,50,1,0,0,0,71,61,1,0,0,0,71,70,1,0,0,0,72,3,1,0,0,0,73,74,7,0,0,0,74,
75,3,14,7,0,75,76,5,15,0,0,76,77,3,6,3,0,77,5,1,0,0,0,78,79,6,3,-1,0,79,
80,5,2,0,0,80,81,3,6,3,0,81,82,5,4,0,0,82,96,1,0,0,0,83,96,5,40,0,0,84,96,
5,35,0,0,85,96,5,26,0,0,86,96,5,27,0,0,87,96,5,28,0,0,88,89,5,29,0,0,89,
90,5,2,0,0,90,91,5,35,0,0,91,96,5,4,0,0,92,96,3,14,7,0,93,96,3,10,5,0,94,
96,3,8,4,0,95,78,1,0,0,0,95,83,1,0,0,0,95,84,1,0,0,0,95,85,1,0,0,0,95,86,
1,0,0,0,95,87,1,0,0,0,95,88,1,0,0,0,95,92,1,0,0,0,95,93,1,0,0,0,95,94,1,
0,0,0,96,108,1,0,0,0,97,98,10,13,0,0,98,99,7,1,0,0,99,107,3,6,3,14,100,101,
10,12,0,0,101,102,7,2,0,0,102,107,3,6,3,13,103,104,10,11,0,0,104,105,7,3,
0,0,105,107,3,6,3,12,106,97,1,0,0,0,106,100,1,0,0,0,106,103,1,0,0,0,107,
110,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,7,1,0,0,0,110,108,1,0,0,
0,111,120,5,2,0,0,112,117,3,14,7,0,113,114,5,3,0,0,114,116,3,14,7,0,115,
113,1,0,0,0,116,119,1,0,0,0,117,115,1,0,0,0,117,118,1,0,0,0,118,121,1,0,
0,0,119,117,1,0,0,0,120,112,1,0,0,0,120,121,1,0,0,0,121,122,1,0,0,0,122,
123,5,4,0,0,123,124,5,5,0,0,124,125,3,12,6,0,125,9,1,0,0,0,126,135,5,30,
0,0,127,132,3,6,3,0,128,129,5,3,0,0,129,131,3,6,3,0,130,128,1,0,0,0,131,
134,1,0,0,0,132,130,1,0,0,0,132,133,1,0,0,0,133,136,1,0,0,0,134,132,1,0,
0,0,135,127,1,0,0,0,135,136,1,0,0,0,136,137,1,0,0,0,137,138,5,31,0,0,138,
11,1,0,0,0,139,143,5,10,0,0,140,142,3,2,1,0,141,140,1,0,0,0,142,145,1,0,
0,0,143,141,1,0,0,0,143,144,1,0,0,0,144,146,1,0,0,0,145,143,1,0,0,0,146,
147,5,11,0,0,147,13,1,0,0,0,148,149,5,39,0,0,149,15,1,0,0,0,14,19,32,35,
55,66,71,95,106,108,117,120,132,135,143];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesCParser extends antlr4.Parser {

    static grammarFileName = "biesC.g4";
    static literalNames = [ null, "'fun'", "'('", "','", "')'", "'=>'", 
                            "'if'", "'then'", "'else'", "'let'", "'{'", 
                            "'}'", "'in'", "'print'", "'const'", "'='", 
                            "'+'", "'-'", "'*'", "'/'", "'=='", "'!='", 
                            "'>'", "'>='", "'<'", "'<='", "'true'", "'false'", 
                            "'null'", "'input'", "'['", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "INT", "FLOAT", "SCI", "STRING", "WS", "LC", 
                             "BC", "ID", "NUMBER" ];
    static ruleNames = [ "program", "statement", "declaration", "expression", 
                         "lambda", "list", "block", "variable" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesCParser.ruleNames;
        this.literalNames = biesCParser.literalNames;
        this.symbolicNames = biesCParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 3:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 13);
    		case 1:
    			return this.precpred(this._ctx, 12);
    		case 2:
    			return this.precpred(this._ctx, 11);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, biesCParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.statement();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 26178) !== 0));
	        this.state = 21;
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
	    var _la = 0;
	    try {
	        this.state = 71;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 23;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 24;
	            this.match(biesCParser.T__0);
	            this.state = 25;
	            this.variable();
	            this.state = 26;
	            this.match(biesCParser.T__1);
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===39) {
	                this.state = 27;
	                this.variable();
	                this.state = 32;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===3) {
	                    this.state = 28;
	                    this.match(biesCParser.T__2);
	                    this.state = 29;
	                    this.variable();
	                    this.state = 34;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 37;
	            this.match(biesCParser.T__3);
	            this.state = 38;
	            this.match(biesCParser.T__4);
	            this.state = 39;
	            this.block();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 41;
	            this.match(biesCParser.T__5);
	            this.state = 42;
	            this.match(biesCParser.T__1);
	            this.state = 43;
	            this.expression(0);
	            this.state = 44;
	            this.match(biesCParser.T__3);
	            this.state = 45;
	            this.match(biesCParser.T__6);
	            this.state = 46;
	            this.block();
	            this.state = 47;
	            this.match(biesCParser.T__7);
	            this.state = 48;
	            this.block();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 50;
	            this.match(biesCParser.T__8);
	            this.state = 51;
	            this.match(biesCParser.T__9);
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===9 || _la===14) {
	                this.state = 52;
	                this.declaration();
	                this.state = 57;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 58;
	            this.match(biesCParser.T__10);
	            this.state = 59;
	            this.match(biesCParser.T__11);
	            this.state = 60;
	            this.block();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 61;
	            this.match(biesCParser.T__12);
	            this.state = 62;
	            this.match(biesCParser.T__1);
	            this.state = 64; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 63;
	                this.expression(0);
	                this.state = 66; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2080374788) !== 0) || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 49) !== 0));
	            this.state = 68;
	            this.match(biesCParser.T__3);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 70;
	            this.block();
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        _la = this._input.LA(1);
	        if(!(_la===9 || _la===14)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 74;
	        this.variable();
	        this.state = 75;
	        this.match(biesCParser.T__14);
	        this.state = 76;
	        this.expression(0);
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 6;
	    this.enterRecursionRule(localctx, 6, biesCParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 79;
	            this.match(biesCParser.T__1);
	            this.state = 80;
	            this.expression(0);
	            this.state = 81;
	            this.match(biesCParser.T__3);
	            break;

	        case 2:
	            this.state = 83;
	            this.match(biesCParser.NUMBER);
	            break;

	        case 3:
	            this.state = 84;
	            this.match(biesCParser.STRING);
	            break;

	        case 4:
	            this.state = 85;
	            this.match(biesCParser.T__25);
	            break;

	        case 5:
	            this.state = 86;
	            this.match(biesCParser.T__26);
	            break;

	        case 6:
	            this.state = 87;
	            this.match(biesCParser.T__27);
	            break;

	        case 7:
	            this.state = 88;
	            this.match(biesCParser.T__28);
	            this.state = 89;
	            this.match(biesCParser.T__1);
	            this.state = 90;
	            this.match(biesCParser.STRING);
	            this.state = 91;
	            this.match(biesCParser.T__3);
	            break;

	        case 8:
	            this.state = 92;
	            this.variable();
	            break;

	        case 9:
	            this.state = 93;
	            this.list();
	            break;

	        case 10:
	            this.state = 94;
	            this.lambda();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 108;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 106;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expression);
	                    this.state = 97;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 98;
	                    _la = this._input.LA(1);
	                    if(!(_la===16 || _la===17)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 99;
	                    this.expression(14);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expression);
	                    this.state = 100;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 101;
	                    _la = this._input.LA(1);
	                    if(!(_la===18 || _la===19)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 102;
	                    this.expression(13);
	                    break;

	                case 3:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expression);
	                    this.state = 103;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 104;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 66060288) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 105;
	                    this.expression(12);
	                    break;

	                } 
	            }
	            this.state = 110;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	lambda() {
	    let localctx = new LambdaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, biesCParser.RULE_lambda);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(biesCParser.T__1);
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 112;
	            this.variable();
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3) {
	                this.state = 113;
	                this.match(biesCParser.T__2);
	                this.state = 114;
	                this.variable();
	                this.state = 119;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 122;
	        this.match(biesCParser.T__3);
	        this.state = 123;
	        this.match(biesCParser.T__4);
	        this.state = 124;
	        this.block();
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
	    this.enterRule(localctx, 10, biesCParser.RULE_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(biesCParser.T__29);
	        this.state = 135;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2080374788) !== 0) || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 49) !== 0)) {
	            this.state = 127;
	            this.expression(0);
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3) {
	                this.state = 128;
	                this.match(biesCParser.T__2);
	                this.state = 129;
	                this.expression(0);
	                this.state = 134;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 137;
	        this.match(biesCParser.T__30);
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, biesCParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this.match(biesCParser.T__9);
	        this.state = 143;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 26178) !== 0)) {
	            this.state = 140;
	            this.statement();
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 146;
	        this.match(biesCParser.T__10);
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, biesCParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(biesCParser.ID);
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
biesCParser.T__22 = 23;
biesCParser.T__23 = 24;
biesCParser.T__24 = 25;
biesCParser.T__25 = 26;
biesCParser.T__26 = 27;
biesCParser.T__27 = 28;
biesCParser.T__28 = 29;
biesCParser.T__29 = 30;
biesCParser.T__30 = 31;
biesCParser.INT = 32;
biesCParser.FLOAT = 33;
biesCParser.SCI = 34;
biesCParser.STRING = 35;
biesCParser.WS = 36;
biesCParser.LC = 37;
biesCParser.BC = 38;
biesCParser.ID = 39;
biesCParser.NUMBER = 40;

biesCParser.RULE_program = 0;
biesCParser.RULE_statement = 1;
biesCParser.RULE_declaration = 2;
biesCParser.RULE_expression = 3;
biesCParser.RULE_lambda = 4;
biesCParser.RULE_list = 5;
biesCParser.RULE_block = 6;
biesCParser.RULE_variable = 7;

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

	declaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationContext,i);
	    }
	};

	variable = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableContext);
	    } else {
	        return this.getTypedRuleContext(VariableContext,i);
	    }
	};

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
	};

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

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitDeclaration(this);
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

	NUMBER() {
	    return this.getToken(biesCParser.NUMBER, 0);
	};

	STRING() {
	    return this.getToken(biesCParser.STRING, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	lambda() {
	    return this.getTypedRuleContext(LambdaContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitExpression(this);
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

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	variable = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableContext);
	    } else {
	        return this.getTypedRuleContext(VariableContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitLambda(this);
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



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_block;
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

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_variable;
    }

	ID() {
	    return this.getToken(biesCParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




biesCParser.ProgramContext = ProgramContext; 
biesCParser.StatementContext = StatementContext; 
biesCParser.DeclarationContext = DeclarationContext; 
biesCParser.ExpressionContext = ExpressionContext; 
biesCParser.LambdaContext = LambdaContext; 
biesCParser.ListContext = ListContext; 
biesCParser.BlockContext = BlockContext; 
biesCParser.VariableContext = VariableContext; 
