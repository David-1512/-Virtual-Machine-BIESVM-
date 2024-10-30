// Generated from ./grammar/biesC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import biesCVisitor from './biesCVisitor.js';

const serializedATN = [4,1,38,167,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,0,1,0,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,33,8,1,10,1,12,1,36,9,1,3,1,38,8,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,56,8,1,10,1,
12,1,59,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,71,8,1,10,1,12,1,
74,9,1,3,1,76,8,1,1,1,1,1,3,1,80,8,1,1,2,1,2,1,2,4,2,85,8,2,11,2,12,2,86,
1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,3,4,112,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,
123,8,4,10,4,12,4,126,9,4,1,5,1,5,1,5,1,5,5,5,132,8,5,10,5,12,5,135,9,5,
3,5,137,8,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,5,6,147,8,6,10,6,12,6,150,9,
6,3,6,152,8,6,1,6,1,6,1,7,1,7,5,7,158,8,7,10,7,12,7,161,9,7,1,7,1,7,1,8,
1,8,1,8,0,1,8,9,0,2,4,6,8,10,12,14,16,0,3,1,0,15,16,1,0,17,18,1,0,19,24,
186,0,19,1,0,0,0,2,79,1,0,0,0,4,81,1,0,0,0,6,90,1,0,0,0,8,111,1,0,0,0,10,
127,1,0,0,0,12,142,1,0,0,0,14,155,1,0,0,0,16,164,1,0,0,0,18,20,3,2,1,0,19,
18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,23,1,0,0,0,23,24,
5,0,0,1,24,1,1,0,0,0,25,80,3,6,3,0,26,27,5,1,0,0,27,28,3,16,8,0,28,37,5,
2,0,0,29,34,3,16,8,0,30,31,5,3,0,0,31,33,3,16,8,0,32,30,1,0,0,0,33,36,1,
0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,38,1,0,0,0,36,34,1,0,0,0,37,29,1,0,
0,0,37,38,1,0,0,0,38,39,1,0,0,0,39,40,5,4,0,0,40,41,5,5,0,0,41,42,3,14,7,
0,42,80,1,0,0,0,43,44,5,6,0,0,44,45,5,2,0,0,45,46,3,8,4,0,46,47,5,4,0,0,
47,48,5,7,0,0,48,49,3,14,7,0,49,50,5,8,0,0,50,51,3,14,7,0,51,80,1,0,0,0,
52,53,5,9,0,0,53,57,5,10,0,0,54,56,3,6,3,0,55,54,1,0,0,0,56,59,1,0,0,0,57,
55,1,0,0,0,57,58,1,0,0,0,58,60,1,0,0,0,59,57,1,0,0,0,60,61,5,11,0,0,61,62,
5,12,0,0,62,80,3,14,7,0,63,80,3,4,2,0,64,80,3,14,7,0,65,66,3,16,8,0,66,75,
5,2,0,0,67,72,3,8,4,0,68,69,5,3,0,0,69,71,3,8,4,0,70,68,1,0,0,0,71,74,1,
0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,76,1,0,0,0,74,72,1,0,0,0,75,67,1,0,
0,0,75,76,1,0,0,0,76,77,1,0,0,0,77,78,5,4,0,0,78,80,1,0,0,0,79,25,1,0,0,
0,79,26,1,0,0,0,79,43,1,0,0,0,79,52,1,0,0,0,79,63,1,0,0,0,79,64,1,0,0,0,
79,65,1,0,0,0,80,3,1,0,0,0,81,82,5,13,0,0,82,84,5,2,0,0,83,85,3,8,4,0,84,
83,1,0,0,0,85,86,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,88,1,0,0,0,88,89,
5,4,0,0,89,5,1,0,0,0,90,91,5,9,0,0,91,92,3,16,8,0,92,93,5,14,0,0,93,94,3,
8,4,0,94,7,1,0,0,0,95,96,6,4,-1,0,96,97,5,2,0,0,97,98,3,8,4,0,98,99,5,4,
0,0,99,112,1,0,0,0,100,112,5,29,0,0,101,112,5,34,0,0,102,112,5,30,0,0,103,
112,5,25,0,0,104,105,5,26,0,0,105,106,5,2,0,0,106,107,5,34,0,0,107,112,5,
4,0,0,108,112,3,16,8,0,109,112,3,12,6,0,110,112,3,10,5,0,111,95,1,0,0,0,
111,100,1,0,0,0,111,101,1,0,0,0,111,102,1,0,0,0,111,103,1,0,0,0,111,104,
1,0,0,0,111,108,1,0,0,0,111,109,1,0,0,0,111,110,1,0,0,0,112,124,1,0,0,0,
113,114,10,12,0,0,114,115,7,0,0,0,115,123,3,8,4,13,116,117,10,11,0,0,117,
118,7,1,0,0,118,123,3,8,4,12,119,120,10,10,0,0,120,121,7,2,0,0,121,123,3,
8,4,11,122,113,1,0,0,0,122,116,1,0,0,0,122,119,1,0,0,0,123,126,1,0,0,0,124,
122,1,0,0,0,124,125,1,0,0,0,125,9,1,0,0,0,126,124,1,0,0,0,127,136,5,2,0,
0,128,133,3,16,8,0,129,130,5,3,0,0,130,132,3,16,8,0,131,129,1,0,0,0,132,
135,1,0,0,0,133,131,1,0,0,0,133,134,1,0,0,0,134,137,1,0,0,0,135,133,1,0,
0,0,136,128,1,0,0,0,136,137,1,0,0,0,137,138,1,0,0,0,138,139,5,4,0,0,139,
140,5,5,0,0,140,141,3,2,1,0,141,11,1,0,0,0,142,151,5,27,0,0,143,148,3,8,
4,0,144,145,5,3,0,0,145,147,3,8,4,0,146,144,1,0,0,0,147,150,1,0,0,0,148,
146,1,0,0,0,148,149,1,0,0,0,149,152,1,0,0,0,150,148,1,0,0,0,151,143,1,0,
0,0,151,152,1,0,0,0,152,153,1,0,0,0,153,154,5,28,0,0,154,13,1,0,0,0,155,
159,5,10,0,0,156,158,3,2,1,0,157,156,1,0,0,0,158,161,1,0,0,0,159,157,1,0,
0,0,159,160,1,0,0,0,160,162,1,0,0,0,161,159,1,0,0,0,162,163,5,11,0,0,163,
15,1,0,0,0,164,165,5,38,0,0,165,17,1,0,0,0,16,21,34,37,57,72,75,79,86,111,
122,124,133,136,148,151,159];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesCParser extends antlr4.Parser {

    static grammarFileName = "biesC.g4";
    static literalNames = [ null, "'fun'", "'('", "','", "')'", "'=>'", 
                            "'if'", "'then'", "'else'", "'let'", "'{'", 
                            "'}'", "'in'", "'print'", "'='", "'+'", "'-'", 
                            "'*'", "'/'", "'=='", "'!='", "'>'", "'>='", 
                            "'<'", "'<='", "'null'", "'input'", "'['", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "NUMBER", "BOOLEAN", 
                             "INT", "FLOAT", "SCI", "STRING", "WS", "LC", 
                             "BC", "ID" ];
    static ruleNames = [ "program", "statement", "print", "declaration", 
                         "expression", "lambda", "list", "block", "variable" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesCParser.ruleNames;
        this.literalNames = biesCParser.literalNames;
        this.symbolicNames = biesCParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 12);
    		case 1:
    			return this.precpred(this._ctx, 11);
    		case 2:
    			return this.precpred(this._ctx, 10);
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
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.statement();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 9794) !== 0) || _la===38);
	        this.state = 23;
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
	        this.state = 79;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            this.match(biesCParser.T__0);
	            this.state = 27;
	            this.variable();
	            this.state = 28;
	            this.match(biesCParser.T__1);
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===38) {
	                this.state = 29;
	                this.variable();
	                this.state = 34;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===3) {
	                    this.state = 30;
	                    this.match(biesCParser.T__2);
	                    this.state = 31;
	                    this.variable();
	                    this.state = 36;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 39;
	            this.match(biesCParser.T__3);
	            this.state = 40;
	            this.match(biesCParser.T__4);
	            this.state = 41;
	            this.block();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 43;
	            this.match(biesCParser.T__5);
	            this.state = 44;
	            this.match(biesCParser.T__1);
	            this.state = 45;
	            this.expression(0);
	            this.state = 46;
	            this.match(biesCParser.T__3);
	            this.state = 47;
	            this.match(biesCParser.T__6);
	            this.state = 48;
	            this.block();
	            this.state = 49;
	            this.match(biesCParser.T__7);
	            this.state = 50;
	            this.block();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 52;
	            this.match(biesCParser.T__8);
	            this.state = 53;
	            this.match(biesCParser.T__9);
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===9) {
	                this.state = 54;
	                this.declaration();
	                this.state = 59;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 60;
	            this.match(biesCParser.T__10);
	            this.state = 61;
	            this.match(biesCParser.T__11);
	            this.state = 62;
	            this.block();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 63;
	            this.print();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 64;
	            this.block();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 65;
	            this.variable();
	            this.state = 66;
	            this.match(biesCParser.T__1);
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1845493764) !== 0) || _la===34 || _la===38) {
	                this.state = 67;
	                this.expression(0);
	                this.state = 72;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===3) {
	                    this.state = 68;
	                    this.match(biesCParser.T__2);
	                    this.state = 69;
	                    this.expression(0);
	                    this.state = 74;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 77;
	            this.match(biesCParser.T__3);
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



	print() {
	    let localctx = new PrintContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, biesCParser.RULE_print);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(biesCParser.T__12);
	        this.state = 82;
	        this.match(biesCParser.T__1);
	        this.state = 84; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 83;
	            this.expression(0);
	            this.state = 86; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1845493764) !== 0) || _la===34 || _la===38);
	        this.state = 88;
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



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, biesCParser.RULE_declaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(biesCParser.T__8);
	        this.state = 91;
	        this.variable();
	        this.state = 92;
	        this.match(biesCParser.T__13);
	        this.state = 93;
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
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, biesCParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 96;
	            this.match(biesCParser.T__1);
	            this.state = 97;
	            this.expression(0);
	            this.state = 98;
	            this.match(biesCParser.T__3);
	            break;

	        case 2:
	            this.state = 100;
	            this.match(biesCParser.NUMBER);
	            break;

	        case 3:
	            this.state = 101;
	            this.match(biesCParser.STRING);
	            break;

	        case 4:
	            this.state = 102;
	            this.match(biesCParser.BOOLEAN);
	            break;

	        case 5:
	            this.state = 103;
	            this.match(biesCParser.T__24);
	            break;

	        case 6:
	            this.state = 104;
	            this.match(biesCParser.T__25);
	            this.state = 105;
	            this.match(biesCParser.T__1);
	            this.state = 106;
	            this.match(biesCParser.STRING);
	            this.state = 107;
	            this.match(biesCParser.T__3);
	            break;

	        case 7:
	            this.state = 108;
	            this.variable();
	            break;

	        case 8:
	            this.state = 109;
	            this.list();
	            break;

	        case 9:
	            this.state = 110;
	            this.lambda();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 124;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 122;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expression);
	                    this.state = 113;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 114;
	                    _la = this._input.LA(1);
	                    if(!(_la===15 || _la===16)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 115;
	                    this.expression(13);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expression);
	                    this.state = 116;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 117;
	                    _la = this._input.LA(1);
	                    if(!(_la===17 || _la===18)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 118;
	                    this.expression(12);
	                    break;

	                case 3:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expression);
	                    this.state = 119;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 120;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 33030144) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 121;
	                    this.expression(11);
	                    break;

	                } 
	            }
	            this.state = 126;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
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
	    this.enterRule(localctx, 10, biesCParser.RULE_lambda);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(biesCParser.T__1);
	        this.state = 136;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===38) {
	            this.state = 128;
	            this.variable();
	            this.state = 133;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3) {
	                this.state = 129;
	                this.match(biesCParser.T__2);
	                this.state = 130;
	                this.variable();
	                this.state = 135;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 138;
	        this.match(biesCParser.T__3);
	        this.state = 139;
	        this.match(biesCParser.T__4);
	        this.state = 140;
	        this.statement();
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
	    this.enterRule(localctx, 12, biesCParser.RULE_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.match(biesCParser.T__26);
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1845493764) !== 0) || _la===34 || _la===38) {
	            this.state = 143;
	            this.expression(0);
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3) {
	                this.state = 144;
	                this.match(biesCParser.T__2);
	                this.state = 145;
	                this.expression(0);
	                this.state = 150;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 153;
	        this.match(biesCParser.T__27);
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
	    this.enterRule(localctx, 14, biesCParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(biesCParser.T__9);
	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 9794) !== 0) || _la===38) {
	            this.state = 156;
	            this.statement();
	            this.state = 161;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 162;
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
	    this.enterRule(localctx, 16, biesCParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
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
biesCParser.NUMBER = 29;
biesCParser.BOOLEAN = 30;
biesCParser.INT = 31;
biesCParser.FLOAT = 32;
biesCParser.SCI = 33;
biesCParser.STRING = 34;
biesCParser.WS = 35;
biesCParser.LC = 36;
biesCParser.BC = 37;
biesCParser.ID = 38;

biesCParser.RULE_program = 0;
biesCParser.RULE_statement = 1;
biesCParser.RULE_print = 2;
biesCParser.RULE_declaration = 3;
biesCParser.RULE_expression = 4;
biesCParser.RULE_lambda = 5;
biesCParser.RULE_list = 6;
biesCParser.RULE_block = 7;
biesCParser.RULE_variable = 8;

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

	print() {
	    return this.getTypedRuleContext(PrintContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrintContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_print;
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
	        return visitor.visitPrint(this);
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

	BOOLEAN() {
	    return this.getToken(biesCParser.BOOLEAN, 0);
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

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
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
biesCParser.PrintContext = PrintContext; 
biesCParser.DeclarationContext = DeclarationContext; 
biesCParser.ExpressionContext = ExpressionContext; 
biesCParser.LambdaContext = LambdaContext; 
biesCParser.ListContext = ListContext; 
biesCParser.BlockContext = BlockContext; 
biesCParser.VariableContext = VariableContext; 
