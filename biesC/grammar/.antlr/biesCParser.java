// Generated from d:/Users/david/Desktop/biesvm/biesvm/biesC/grammar/biesC.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class biesCParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		INT=32, FLOAT=33, SCI=34, STRING=35, WS=36, LC=37, BC=38, ID=39, NUMBER=40;
	public static final int
		RULE_program = 0, RULE_statement = 1, RULE_declaration = 2, RULE_expression = 3, 
		RULE_lambda = 4, RULE_list = 5, RULE_block = 6, RULE_variable = 7;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statement", "declaration", "expression", "lambda", "list", 
			"block", "variable"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'fun'", "'('", "','", "')'", "'=>'", "'if'", "'then'", "'else'", 
			"'let'", "'{'", "'}'", "'in'", "'print'", "'const'", "'='", "'+'", "'-'", 
			"'*'", "'/'", "'=='", "'!='", "'>'", "'>='", "'<'", "'<='", "'true'", 
			"'false'", "'null'", "'input'", "'['", "']'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, "INT", "FLOAT", "SCI", 
			"STRING", "WS", "LC", "BC", "ID", "NUMBER"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "biesC.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public biesCParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(biesCParser.EOF, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(17); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(16);
				statement();
				}
				}
				setState(19); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 26178L) != 0) );
			setState(21);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public List<DeclarationContext> declaration() {
			return getRuleContexts(DeclarationContext.class);
		}
		public DeclarationContext declaration(int i) {
			return getRuleContext(DeclarationContext.class,i);
		}
		public List<VariableContext> variable() {
			return getRuleContexts(VariableContext.class);
		}
		public VariableContext variable(int i) {
			return getRuleContext(VariableContext.class,i);
		}
		public List<BlockContext> block() {
			return getRuleContexts(BlockContext.class);
		}
		public BlockContext block(int i) {
			return getRuleContext(BlockContext.class,i);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		int _la;
		try {
			setState(71);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(23);
				declaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(24);
				match(T__0);
				setState(25);
				variable();
				setState(26);
				match(T__1);
				setState(35);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ID) {
					{
					setState(27);
					variable();
					setState(32);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==T__2) {
						{
						{
						setState(28);
						match(T__2);
						setState(29);
						variable();
						}
						}
						setState(34);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(37);
				match(T__3);
				setState(38);
				match(T__4);
				setState(39);
				block();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(41);
				match(T__5);
				setState(42);
				match(T__1);
				setState(43);
				expression(0);
				setState(44);
				match(T__3);
				setState(45);
				match(T__6);
				setState(46);
				block();
				setState(47);
				match(T__7);
				setState(48);
				block();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(50);
				match(T__8);
				setState(51);
				match(T__9);
				setState(55);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__8 || _la==T__13) {
					{
					{
					setState(52);
					declaration();
					}
					}
					setState(57);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(58);
				match(T__10);
				setState(59);
				match(T__11);
				setState(60);
				block();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(61);
				match(T__12);
				setState(62);
				match(T__1);
				setState(64); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(63);
					expression(0);
					}
					}
					setState(66); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 1685707554820L) != 0) );
				setState(68);
				match(T__3);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(70);
				block();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclarationContext extends ParserRuleContext {
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public DeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaration; }
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_declaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			_la = _input.LA(1);
			if ( !(_la==T__8 || _la==T__13) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(74);
			variable();
			setState(75);
			match(T__14);
			setState(76);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode NUMBER() { return getToken(biesCParser.NUMBER, 0); }
		public TerminalNode STRING() { return getToken(biesCParser.STRING, 0); }
		public VariableContext variable() {
			return getRuleContext(VariableContext.class,0);
		}
		public ListContext list() {
			return getRuleContext(ListContext.class,0);
		}
		public LambdaContext lambda() {
			return getRuleContext(LambdaContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 6;
		enterRecursionRule(_localctx, 6, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(95);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(79);
				match(T__1);
				setState(80);
				expression(0);
				setState(81);
				match(T__3);
				}
				break;
			case 2:
				{
				setState(83);
				match(NUMBER);
				}
				break;
			case 3:
				{
				setState(84);
				match(STRING);
				}
				break;
			case 4:
				{
				setState(85);
				match(T__25);
				}
				break;
			case 5:
				{
				setState(86);
				match(T__26);
				}
				break;
			case 6:
				{
				setState(87);
				match(T__27);
				}
				break;
			case 7:
				{
				setState(88);
				match(T__28);
				setState(89);
				match(T__1);
				setState(90);
				match(STRING);
				setState(91);
				match(T__3);
				}
				break;
			case 8:
				{
				setState(92);
				variable();
				}
				break;
			case 9:
				{
				setState(93);
				list();
				}
				break;
			case 10:
				{
				setState(94);
				lambda();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(108);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(106);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(97);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(98);
						_la = _input.LA(1);
						if ( !(_la==T__15 || _la==T__16) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(99);
						expression(14);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(100);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(101);
						_la = _input.LA(1);
						if ( !(_la==T__17 || _la==T__18) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(102);
						expression(13);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(103);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(104);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 66060288L) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(105);
						expression(12);
						}
						break;
					}
					} 
				}
				setState(110);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LambdaContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public List<VariableContext> variable() {
			return getRuleContexts(VariableContext.class);
		}
		public VariableContext variable(int i) {
			return getRuleContext(VariableContext.class,i);
		}
		public LambdaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lambda; }
	}

	public final LambdaContext lambda() throws RecognitionException {
		LambdaContext _localctx = new LambdaContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_lambda);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(111);
			match(T__1);
			setState(120);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(112);
				variable();
				setState(117);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__2) {
					{
					{
					setState(113);
					match(T__2);
					setState(114);
					variable();
					}
					}
					setState(119);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(122);
			match(T__3);
			setState(123);
			match(T__4);
			setState(124);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ListContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_list; }
	}

	public final ListContext list() throws RecognitionException {
		ListContext _localctx = new ListContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(126);
			match(T__29);
			setState(135);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1685707554820L) != 0)) {
				{
				setState(127);
				expression(0);
				setState(132);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__2) {
					{
					{
					setState(128);
					match(T__2);
					setState(129);
					expression(0);
					}
					}
					setState(134);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(137);
			match(T__30);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(139);
			match(T__9);
			setState(143);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 26178L) != 0)) {
				{
				{
				setState(140);
				statement();
				}
				}
				setState(145);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(146);
			match(T__10);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariableContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(biesCParser.ID, 0); }
		public VariableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variable; }
	}

	public final VariableContext variable() throws RecognitionException {
		VariableContext _localctx = new VariableContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_variable);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 3:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 13);
		case 1:
			return precpred(_ctx, 12);
		case 2:
			return precpred(_ctx, 11);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001(\u0097\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0001"+
		"\u0000\u0004\u0000\u0012\b\u0000\u000b\u0000\f\u0000\u0013\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0005\u0001\u001f\b\u0001\n\u0001\f\u0001\"\t"+
		"\u0001\u0003\u0001$\b\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0005\u00016\b\u0001\n\u0001\f\u00019\t\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0004\u0001A\b"+
		"\u0001\u000b\u0001\f\u0001B\u0001\u0001\u0001\u0001\u0001\u0001\u0003"+
		"\u0001H\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003"+
		"\u0003`\b\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u0003k\b"+
		"\u0003\n\u0003\f\u0003n\t\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0005\u0004t\b\u0004\n\u0004\f\u0004w\t\u0004\u0003\u0004y\b\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0005\u0005\u0083\b\u0005\n\u0005\f\u0005\u0086"+
		"\t\u0005\u0003\u0005\u0088\b\u0005\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0005\u0006\u008e\b\u0006\n\u0006\f\u0006\u0091\t\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0000\u0001\u0006"+
		"\b\u0000\u0002\u0004\u0006\b\n\f\u000e\u0000\u0004\u0002\u0000\t\t\u000e"+
		"\u000e\u0001\u0000\u0010\u0011\u0001\u0000\u0012\u0013\u0001\u0000\u0014"+
		"\u0019\u00a9\u0000\u0011\u0001\u0000\u0000\u0000\u0002G\u0001\u0000\u0000"+
		"\u0000\u0004I\u0001\u0000\u0000\u0000\u0006_\u0001\u0000\u0000\u0000\b"+
		"o\u0001\u0000\u0000\u0000\n~\u0001\u0000\u0000\u0000\f\u008b\u0001\u0000"+
		"\u0000\u0000\u000e\u0094\u0001\u0000\u0000\u0000\u0010\u0012\u0003\u0002"+
		"\u0001\u0000\u0011\u0010\u0001\u0000\u0000\u0000\u0012\u0013\u0001\u0000"+
		"\u0000\u0000\u0013\u0011\u0001\u0000\u0000\u0000\u0013\u0014\u0001\u0000"+
		"\u0000\u0000\u0014\u0015\u0001\u0000\u0000\u0000\u0015\u0016\u0005\u0000"+
		"\u0000\u0001\u0016\u0001\u0001\u0000\u0000\u0000\u0017H\u0003\u0004\u0002"+
		"\u0000\u0018\u0019\u0005\u0001\u0000\u0000\u0019\u001a\u0003\u000e\u0007"+
		"\u0000\u001a#\u0005\u0002\u0000\u0000\u001b \u0003\u000e\u0007\u0000\u001c"+
		"\u001d\u0005\u0003\u0000\u0000\u001d\u001f\u0003\u000e\u0007\u0000\u001e"+
		"\u001c\u0001\u0000\u0000\u0000\u001f\"\u0001\u0000\u0000\u0000 \u001e"+
		"\u0001\u0000\u0000\u0000 !\u0001\u0000\u0000\u0000!$\u0001\u0000\u0000"+
		"\u0000\" \u0001\u0000\u0000\u0000#\u001b\u0001\u0000\u0000\u0000#$\u0001"+
		"\u0000\u0000\u0000$%\u0001\u0000\u0000\u0000%&\u0005\u0004\u0000\u0000"+
		"&\'\u0005\u0005\u0000\u0000\'(\u0003\f\u0006\u0000(H\u0001\u0000\u0000"+
		"\u0000)*\u0005\u0006\u0000\u0000*+\u0005\u0002\u0000\u0000+,\u0003\u0006"+
		"\u0003\u0000,-\u0005\u0004\u0000\u0000-.\u0005\u0007\u0000\u0000./\u0003"+
		"\f\u0006\u0000/0\u0005\b\u0000\u000001\u0003\f\u0006\u00001H\u0001\u0000"+
		"\u0000\u000023\u0005\t\u0000\u000037\u0005\n\u0000\u000046\u0003\u0004"+
		"\u0002\u000054\u0001\u0000\u0000\u000069\u0001\u0000\u0000\u000075\u0001"+
		"\u0000\u0000\u000078\u0001\u0000\u0000\u00008:\u0001\u0000\u0000\u0000"+
		"97\u0001\u0000\u0000\u0000:;\u0005\u000b\u0000\u0000;<\u0005\f\u0000\u0000"+
		"<H\u0003\f\u0006\u0000=>\u0005\r\u0000\u0000>@\u0005\u0002\u0000\u0000"+
		"?A\u0003\u0006\u0003\u0000@?\u0001\u0000\u0000\u0000AB\u0001\u0000\u0000"+
		"\u0000B@\u0001\u0000\u0000\u0000BC\u0001\u0000\u0000\u0000CD\u0001\u0000"+
		"\u0000\u0000DE\u0005\u0004\u0000\u0000EH\u0001\u0000\u0000\u0000FH\u0003"+
		"\f\u0006\u0000G\u0017\u0001\u0000\u0000\u0000G\u0018\u0001\u0000\u0000"+
		"\u0000G)\u0001\u0000\u0000\u0000G2\u0001\u0000\u0000\u0000G=\u0001\u0000"+
		"\u0000\u0000GF\u0001\u0000\u0000\u0000H\u0003\u0001\u0000\u0000\u0000"+
		"IJ\u0007\u0000\u0000\u0000JK\u0003\u000e\u0007\u0000KL\u0005\u000f\u0000"+
		"\u0000LM\u0003\u0006\u0003\u0000M\u0005\u0001\u0000\u0000\u0000NO\u0006"+
		"\u0003\uffff\uffff\u0000OP\u0005\u0002\u0000\u0000PQ\u0003\u0006\u0003"+
		"\u0000QR\u0005\u0004\u0000\u0000R`\u0001\u0000\u0000\u0000S`\u0005(\u0000"+
		"\u0000T`\u0005#\u0000\u0000U`\u0005\u001a\u0000\u0000V`\u0005\u001b\u0000"+
		"\u0000W`\u0005\u001c\u0000\u0000XY\u0005\u001d\u0000\u0000YZ\u0005\u0002"+
		"\u0000\u0000Z[\u0005#\u0000\u0000[`\u0005\u0004\u0000\u0000\\`\u0003\u000e"+
		"\u0007\u0000]`\u0003\n\u0005\u0000^`\u0003\b\u0004\u0000_N\u0001\u0000"+
		"\u0000\u0000_S\u0001\u0000\u0000\u0000_T\u0001\u0000\u0000\u0000_U\u0001"+
		"\u0000\u0000\u0000_V\u0001\u0000\u0000\u0000_W\u0001\u0000\u0000\u0000"+
		"_X\u0001\u0000\u0000\u0000_\\\u0001\u0000\u0000\u0000_]\u0001\u0000\u0000"+
		"\u0000_^\u0001\u0000\u0000\u0000`l\u0001\u0000\u0000\u0000ab\n\r\u0000"+
		"\u0000bc\u0007\u0001\u0000\u0000ck\u0003\u0006\u0003\u000ede\n\f\u0000"+
		"\u0000ef\u0007\u0002\u0000\u0000fk\u0003\u0006\u0003\rgh\n\u000b\u0000"+
		"\u0000hi\u0007\u0003\u0000\u0000ik\u0003\u0006\u0003\fja\u0001\u0000\u0000"+
		"\u0000jd\u0001\u0000\u0000\u0000jg\u0001\u0000\u0000\u0000kn\u0001\u0000"+
		"\u0000\u0000lj\u0001\u0000\u0000\u0000lm\u0001\u0000\u0000\u0000m\u0007"+
		"\u0001\u0000\u0000\u0000nl\u0001\u0000\u0000\u0000ox\u0005\u0002\u0000"+
		"\u0000pu\u0003\u000e\u0007\u0000qr\u0005\u0003\u0000\u0000rt\u0003\u000e"+
		"\u0007\u0000sq\u0001\u0000\u0000\u0000tw\u0001\u0000\u0000\u0000us\u0001"+
		"\u0000\u0000\u0000uv\u0001\u0000\u0000\u0000vy\u0001\u0000\u0000\u0000"+
		"wu\u0001\u0000\u0000\u0000xp\u0001\u0000\u0000\u0000xy\u0001\u0000\u0000"+
		"\u0000yz\u0001\u0000\u0000\u0000z{\u0005\u0004\u0000\u0000{|\u0005\u0005"+
		"\u0000\u0000|}\u0003\f\u0006\u0000}\t\u0001\u0000\u0000\u0000~\u0087\u0005"+
		"\u001e\u0000\u0000\u007f\u0084\u0003\u0006\u0003\u0000\u0080\u0081\u0005"+
		"\u0003\u0000\u0000\u0081\u0083\u0003\u0006\u0003\u0000\u0082\u0080\u0001"+
		"\u0000\u0000\u0000\u0083\u0086\u0001\u0000\u0000\u0000\u0084\u0082\u0001"+
		"\u0000\u0000\u0000\u0084\u0085\u0001\u0000\u0000\u0000\u0085\u0088\u0001"+
		"\u0000\u0000\u0000\u0086\u0084\u0001\u0000\u0000\u0000\u0087\u007f\u0001"+
		"\u0000\u0000\u0000\u0087\u0088\u0001\u0000\u0000\u0000\u0088\u0089\u0001"+
		"\u0000\u0000\u0000\u0089\u008a\u0005\u001f\u0000\u0000\u008a\u000b\u0001"+
		"\u0000\u0000\u0000\u008b\u008f\u0005\n\u0000\u0000\u008c\u008e\u0003\u0002"+
		"\u0001\u0000\u008d\u008c\u0001\u0000\u0000\u0000\u008e\u0091\u0001\u0000"+
		"\u0000\u0000\u008f\u008d\u0001\u0000\u0000\u0000\u008f\u0090\u0001\u0000"+
		"\u0000\u0000\u0090\u0092\u0001\u0000\u0000\u0000\u0091\u008f\u0001\u0000"+
		"\u0000\u0000\u0092\u0093\u0005\u000b\u0000\u0000\u0093\r\u0001\u0000\u0000"+
		"\u0000\u0094\u0095\u0005\'\u0000\u0000\u0095\u000f\u0001\u0000\u0000\u0000"+
		"\u000e\u0013 #7BG_jlux\u0084\u0087\u008f";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}