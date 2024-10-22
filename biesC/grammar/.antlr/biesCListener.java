// Generated from d:/Users/david/Desktop/biesvm/biesvm/biesC/grammar/biesC.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link biesCParser}.
 */
public interface biesCListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link biesCParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(biesCParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesCParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(biesCParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesCParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(biesCParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesCParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(biesCParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesCParser#declaration}.
	 * @param ctx the parse tree
	 */
	void enterDeclaration(biesCParser.DeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesCParser#declaration}.
	 * @param ctx the parse tree
	 */
	void exitDeclaration(biesCParser.DeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesCParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(biesCParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesCParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(biesCParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesCParser#lambda}.
	 * @param ctx the parse tree
	 */
	void enterLambda(biesCParser.LambdaContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesCParser#lambda}.
	 * @param ctx the parse tree
	 */
	void exitLambda(biesCParser.LambdaContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesCParser#list}.
	 * @param ctx the parse tree
	 */
	void enterList(biesCParser.ListContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesCParser#list}.
	 * @param ctx the parse tree
	 */
	void exitList(biesCParser.ListContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesCParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(biesCParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesCParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(biesCParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link biesCParser#variable}.
	 * @param ctx the parse tree
	 */
	void enterVariable(biesCParser.VariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link biesCParser#variable}.
	 * @param ctx the parse tree
	 */
	void exitVariable(biesCParser.VariableContext ctx);
}