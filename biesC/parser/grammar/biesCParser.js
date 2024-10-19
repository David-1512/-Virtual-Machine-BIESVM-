// Generated from ./grammar/biesC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import biesCVisitor from './biesCVisitor.js';

const serializedATN = [4,1,36,149,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,38,8,1,10,1,12,1,41,9,
1,3,1,43,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,5,1,61,8,1,10,1,12,1,64,9,1,1,1,1,1,1,1,1,1,3,1,70,8,1,1,2,1,2,1,2,1,
2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,3,3,94,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,105,8,3,10,3,12,3,108,
9,3,1,4,1,4,1,4,1,4,5,4,114,8,4,10,4,12,4,117,9,4,3,4,119,8,4,1,4,1,4,1,
4,1,4,1,5,1,5,1,5,1,5,5,5,129,8,5,10,5,12,5,132,9,5,3,5,134,8,5,1,5,1,5,
1,6,1,6,5,6,140,8,6,10,6,12,6,143,9,6,1,6,1,6,1,7,1,7,1,7,0,1,6,8,0,2,4,
6,8,10,12,14,0,4,2,0,1,1,3,3,1,0,15,16,1,0,17,18,1,0,19,24,166,0,17,1,0,
0,0,2,69,1,0,0,0,4,71,1,0,0,0,6,93,1,0,0,0,8,109,1,0,0,0,10,124,1,0,0,0,
12,137,1,0,0,0,14,146,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,19,1,0,0,0,
19,17,1,0,0,0,19,20,1,0,0,0,20,1,1,0,0,0,21,22,5,1,0,0,22,23,3,14,7,0,23,
24,5,2,0,0,24,25,3,6,3,0,25,70,1,0,0,0,26,27,5,3,0,0,27,28,3,14,7,0,28,29,
5,2,0,0,29,30,3,6,3,0,30,70,1,0,0,0,31,32,5,4,0,0,32,33,3,14,7,0,33,42,5,
5,0,0,34,39,3,14,7,0,35,36,5,6,0,0,36,38,3,14,7,0,37,35,1,0,0,0,38,41,1,
0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,42,34,1,0,
0,0,42,43,1,0,0,0,43,44,1,0,0,0,44,45,5,7,0,0,45,46,5,8,0,0,46,47,3,12,6,
0,47,70,1,0,0,0,48,49,5,9,0,0,49,50,5,5,0,0,50,51,3,6,3,0,51,52,5,7,0,0,
52,53,5,10,0,0,53,54,3,12,6,0,54,55,5,11,0,0,55,56,3,12,6,0,56,70,1,0,0,
0,57,58,5,1,0,0,58,62,5,12,0,0,59,61,3,4,2,0,60,59,1,0,0,0,61,64,1,0,0,0,
62,60,1,0,0,0,62,63,1,0,0,0,63,65,1,0,0,0,64,62,1,0,0,0,65,66,5,13,0,0,66,
67,5,14,0,0,67,70,3,12,6,0,68,70,3,12,6,0,69,21,1,0,0,0,69,26,1,0,0,0,69,
31,1,0,0,0,69,48,1,0,0,0,69,57,1,0,0,0,69,68,1,0,0,0,70,3,1,0,0,0,71,72,
7,0,0,0,72,73,3,14,7,0,73,74,5,2,0,0,74,75,3,6,3,0,75,5,1,0,0,0,76,77,6,
3,-1,0,77,78,5,5,0,0,78,79,3,6,3,0,79,80,5,7,0,0,80,94,1,0,0,0,81,94,5,32,
0,0,82,94,5,33,0,0,83,94,5,25,0,0,84,94,5,26,0,0,85,94,5,27,0,0,86,87,5,
28,0,0,87,88,5,5,0,0,88,89,5,33,0,0,89,94,5,7,0,0,90,94,3,14,7,0,91,94,3,
10,5,0,92,94,3,8,4,0,93,76,1,0,0,0,93,81,1,0,0,0,93,82,1,0,0,0,93,83,1,0,
0,0,93,84,1,0,0,0,93,85,1,0,0,0,93,86,1,0,0,0,93,90,1,0,0,0,93,91,1,0,0,
0,93,92,1,0,0,0,94,106,1,0,0,0,95,96,10,13,0,0,96,97,7,1,0,0,97,105,3,6,
3,14,98,99,10,12,0,0,99,100,7,2,0,0,100,105,3,6,3,13,101,102,10,11,0,0,102,
103,7,3,0,0,103,105,3,6,3,12,104,95,1,0,0,0,104,98,1,0,0,0,104,101,1,0,0,
0,105,108,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,7,1,0,0,0,108,106,
1,0,0,0,109,118,5,5,0,0,110,115,3,14,7,0,111,112,5,6,0,0,112,114,3,14,7,
0,113,111,1,0,0,0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,119,
1,0,0,0,117,115,1,0,0,0,118,110,1,0,0,0,118,119,1,0,0,0,119,120,1,0,0,0,
120,121,5,7,0,0,121,122,5,8,0,0,122,123,3,12,6,0,123,9,1,0,0,0,124,133,5,
29,0,0,125,130,3,6,3,0,126,127,5,6,0,0,127,129,3,6,3,0,128,126,1,0,0,0,129,
132,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,134,1,0,0,0,132,130,1,0,
0,0,133,125,1,0,0,0,133,134,1,0,0,0,134,135,1,0,0,0,135,136,5,30,0,0,136,
11,1,0,0,0,137,141,5,12,0,0,138,140,3,2,1,0,139,138,1,0,0,0,140,143,1,0,
0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,144,1,0,0,0,143,141,1,0,0,0,144,
145,5,13,0,0,145,13,1,0,0,0,146,147,5,31,0,0,147,15,1,0,0,0,13,19,39,42,
62,69,93,104,106,115,118,130,133,141];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesCParser extends antlr4.Parser {

    static grammarFileName = "biesC.g4";
    static literalNames = [ null, "'let'", "'='", "'const'", "'fun'", "'('", 
                            "','", "')'", "'=>'", "'if'", "'then'", "'else'", 
                            "'{'", "'}'", "'in'", "'+'", "'-'", "'*'", "'/'", 
                            "'=='", "'!='", "'>'", "'>='", "'<'", "'<='", 
                            "'true'", "'false'", "'null'", "'input'", "'['", 
                            "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "ID", 
                             "NUMBER", "STRING", "WS", "LINE_COMMENT", "BLOCK_COMMENT" ];
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
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4634) !== 0));
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
	        this.state = 69;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 21;
	            this.match(biesCParser.T__0);
	            this.state = 22;
	            this.variable();
	            this.state = 23;
	            this.match(biesCParser.T__1);
	            this.state = 24;
	            this.expression(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            this.match(biesCParser.T__2);
	            this.state = 27;
	            this.variable();
	            this.state = 28;
	            this.match(biesCParser.T__1);
	            this.state = 29;
	            this.expression(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 31;
	            this.match(biesCParser.T__3);
	            this.state = 32;
	            this.variable();
	            this.state = 33;
	            this.match(biesCParser.T__4);
	            this.state = 42;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 34;
	                this.variable();
	                this.state = 39;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===6) {
	                    this.state = 35;
	                    this.match(biesCParser.T__5);
	                    this.state = 36;
	                    this.variable();
	                    this.state = 41;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 44;
	            this.match(biesCParser.T__6);
	            this.state = 45;
	            this.match(biesCParser.T__7);
	            this.state = 46;
	            this.block();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 48;
	            this.match(biesCParser.T__8);
	            this.state = 49;
	            this.match(biesCParser.T__4);
	            this.state = 50;
	            this.expression(0);
	            this.state = 51;
	            this.match(biesCParser.T__6);
	            this.state = 52;
	            this.match(biesCParser.T__9);
	            this.state = 53;
	            this.block();
	            this.state = 54;
	            this.match(biesCParser.T__10);
	            this.state = 55;
	            this.block();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 57;
	            this.match(biesCParser.T__0);
	            this.state = 58;
	            this.match(biesCParser.T__11);
	            this.state = 62;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===1 || _la===3) {
	                this.state = 59;
	                this.declaration();
	                this.state = 64;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 65;
	            this.match(biesCParser.T__12);
	            this.state = 66;
	            this.match(biesCParser.T__13);
	            this.state = 67;
	            this.block();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 68;
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
	        this.state = 71;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===3)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 72;
	        this.variable();
	        this.state = 73;
	        this.match(biesCParser.T__1);
	        this.state = 74;
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
	        this.state = 93;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 77;
	            this.match(biesCParser.T__4);
	            this.state = 78;
	            this.expression(0);
	            this.state = 79;
	            this.match(biesCParser.T__6);
	            break;

	        case 2:
	            this.state = 81;
	            this.match(biesCParser.NUMBER);
	            break;

	        case 3:
	            this.state = 82;
	            this.match(biesCParser.STRING);
	            break;

	        case 4:
	            this.state = 83;
	            this.match(biesCParser.T__24);
	            break;

	        case 5:
	            this.state = 84;
	            this.match(biesCParser.T__25);
	            break;

	        case 6:
	            this.state = 85;
	            this.match(biesCParser.T__26);
	            break;

	        case 7:
	            this.state = 86;
	            this.match(biesCParser.T__27);
	            this.state = 87;
	            this.match(biesCParser.T__4);
	            this.state = 88;
	            this.match(biesCParser.STRING);
	            this.state = 89;
	            this.match(biesCParser.T__6);
	            break;

	        case 8:
	            this.state = 90;
	            this.variable();
	            break;

	        case 9:
	            this.state = 91;
	            this.list();
	            break;

	        case 10:
	            this.state = 92;
	            this.lambda();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 106;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 104;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expression);
	                    this.state = 95;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 96;
	                    _la = this._input.LA(1);
	                    if(!(_la===15 || _la===16)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 97;
	                    this.expression(14);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expression);
	                    this.state = 98;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 99;
	                    _la = this._input.LA(1);
	                    if(!(_la===17 || _la===18)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 100;
	                    this.expression(13);
	                    break;

	                case 3:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expression);
	                    this.state = 101;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 102;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 33030144) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 103;
	                    this.expression(12);
	                    break;

	                } 
	            }
	            this.state = 108;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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
	        this.state = 109;
	        this.match(biesCParser.T__4);
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 110;
	            this.variable();
	            this.state = 115;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 111;
	                this.match(biesCParser.T__5);
	                this.state = 112;
	                this.variable();
	                this.state = 117;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 120;
	        this.match(biesCParser.T__6);
	        this.state = 121;
	        this.match(biesCParser.T__7);
	        this.state = 122;
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
	        this.state = 124;
	        this.match(biesCParser.T__28);
	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 5)) & ~0x1f) === 0 && ((1 << (_la - 5)) & 502267905) !== 0)) {
	            this.state = 125;
	            this.expression(0);
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 126;
	                this.match(biesCParser.T__5);
	                this.state = 127;
	                this.expression(0);
	                this.state = 132;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 135;
	        this.match(biesCParser.T__29);
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
	        this.state = 137;
	        this.match(biesCParser.T__11);
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4634) !== 0)) {
	            this.state = 138;
	            this.statement();
	            this.state = 143;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 144;
	        this.match(biesCParser.T__12);
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
	        this.state = 146;
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
biesCParser.ID = 31;
biesCParser.NUMBER = 32;
biesCParser.STRING = 33;
biesCParser.WS = 34;
biesCParser.LINE_COMMENT = 35;
biesCParser.BLOCK_COMMENT = 36;

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

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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
