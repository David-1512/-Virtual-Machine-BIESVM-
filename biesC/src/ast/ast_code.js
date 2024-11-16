import biesCVisitor from '../../parser/grammar/biesCVisitor.js';
import biesCLexer from '../../parser/grammar/biesCLexer.js';
import Block from '../code/block.js';
import Instruccion from '../code/Instruccion.js';
import SymbolTable from '../semantic/symbol_table.js';
import { MNEMONICS } from '../code_generator/mnemonics.js';

class ASTCode extends biesCVisitor {
	constructor(id, argument, parent) {
		super();
		this.block = new Block(SymbolTable.getCurrentScopeId(), argument, parent);
	}

	visitProgram(ctx) {
		ctx.statement().forEach(this.visit.bind(this));
		this.block.addInstruccion(new Instruccion(MNEMONICS.HLT));
		this.block.addInstruccion(new Instruccion(`$END $${this.block.getId()}`));
		this.block.addInstruccion(new Instruccion(`${MNEMONICS.INI} $${this.block.getId()}`));
		return this.block;
	}

	visitStatement(ctx) {
		if (ctx.expression()) {	this.visit(ctx.expression()); }
		if (ctx.declaration()) { this.visit(ctx.declaration());	}
	}

	//Expression

	visitExpression(ctx) {	this.visit(ctx.logicalOrExpression());	}

	visitLogicalOrExpression(ctx) {	this.visit(ctx.logicalAndExpression()); }

	visitLogicalAndExpression(ctx) { this.visit(ctx.equalityExpression());	}

	visitEqualityExpression(ctx) {
		if (ctx.getChildCount() > 1) {
			this.visit(ctx.getChild(0));
			for (let i = 1; i < ctx.getChildCount(); i++) {
				this.visit(ctx.getChild(i));
				const operator = ctx.getChild(i - 1).getText();
				if (operator === '==') {	this.block.addInstruccion(new Instruccion(MNEMONICS.EQ));	}
				if (operator === '!=') {	this.block.addInstruccion(new Instruccion(MNEMONICS.NEQ));	} //REVISAR
			}
		} else {
			this.visit(ctx.relationalExpression());
		}
	}

	visitRelationalExpression(ctx) {
		//Esto hacerlo diferente
		if (ctx.getChildCount() > 1) {
			this.visit(ctx.getChild(0));
			for (let i = 1; i < ctx.getChildCount(); i++) {
				this.visit(ctx.getChild(i));
				const operator = ctx.getChild(i - 1).getText();
				if (operator === '>') {	this.block.addInstruccion(new Instruccion(MNEMONICS.GT)); }
				if (operator === '>=') { this.block.addInstruccion(new Instruccion(MNEMONICS.GTE)); }
				if (operator === '<') {	this.block.addInstruccion(new Instruccion(MNEMONICS.LT)); }
				if (operator === '<=') { this.block.addInstruccion(new Instruccion(MNEMONICS.LTE));	}
			}
		} else {
			this.visit(ctx.additiveExpression());
		}
	}

	visitAdditiveExpression(ctx) {
		if (ctx.getChildCount() > 1) {
			this.visit(ctx.getChild(0));
			for (let i = 1; i < ctx.getChildCount(); i++) {
				this.visit(ctx.getChild(i));
				const operator = ctx.getChild(i - 1).getText();
				if (operator === '+') {	this.block.addInstruccion(new Instruccion(MNEMONICS.ADD));	}
				if (operator === '-') {	this.block.addInstruccion(new Instruccion(MNEMONICS.SUB));	}
			}
		} else {
			this.visit(ctx.multiplicativeExpression());
		}
	}

	visitMultiplicativeExpression(ctx) {
		if (ctx.getChildCount() > 1) {
			this.visit(ctx.getChild(0));
			for (let i = 1; i < ctx.getChildCount(); i++) {
				this.visit(ctx.getChild(i));
				const operator = ctx.getChild(i - 1).getText();
				if (operator === '*') {	this.block.addInstruccion(new Instruccion(MNEMONICS.MUL));	}
				if (operator === '/') {	this.block.addInstruccion(new Instruccion(MNEMONICS.DIV));	}
			}
		} else {
			this.visit(ctx.exponentialExpression());
		}
	}

	visitExponentialExpression(ctx) {
		if (ctx.getChildCount() > 1) {
			this.visit(ctx.getChild(0));
			for (let i = 1; i < ctx.getChildCount(); i++) {
				this.visit(ctx.getChild(i));
				const operator = ctx.getChild(i - 1).getText();
				if (operator === '**') {
					this.block.addInstruccion(new Instruccion(MNEMONICS.POW));
				}
			}
		} else {
			this.visit(ctx.unaryExpression());
		}
	}

	visitUnaryExpression(ctx) {
		this.visit(ctx.primaryExpression());
	}

	visitPrimaryExpression(ctx) {
		if (ctx.builtinFunction()) {
			this.visit(ctx.builtinFunction());
		}
		if (ctx.literal()) {
			this.visit(ctx.literal());
		}
		if (ctx.lambda()) {
			this.visit(ctx.lambda());
		}
		if (ctx.expression()) {
			this.visit(ctx.expression());
		}
		if (ctx.functionCallChain()) {
			this.visit(ctx.functionCallChain());
		}
		if (ctx.ifExpression()) {
			this.visit(ctx.ifExpression());
		}
		if (ctx.list()) {
			this.visit(ctx.list());
		}
	}

	visitList() {} //Preguntar el tema de las listas

	visitIfExpression(ctx) {
		this.visit(ctx.expression());
		this.visit(ctx.thenExpr());
		this.visit(ctx.elseExpr());
	}

	visitThenExpr(ctx) {
		let thenAST = new ASTIfElse();
		let thenPart = thenAST.visitIE(ctx);
		this.block.addInstruccion(new Instruccion(MNEMONICS.BF, [thenPart.getCantInstruccions() + 1]));
		this.thenElseInstruccions(thenPart.getInstruccions());
	}

	visitElseExpr(ctx) {
		let elseAST = new ASTIfElse();
		let elsePart = elseAST.visitIE(ctx);
		this.block.addInstruccion(new Instruccion(MNEMONICS.BR, [elsePart.getCantInstruccions()]));
		this.thenElseInstruccions(elsePart.getInstruccions());
	}

	thenElseInstruccions(instruccions) {
		for (const instruccion of instruccions) {
			this.block.addInstruccion(instruccion);
		}
	}

	visitFunctionCallChain(ctx) {
		let args = [];
		let linea = ctx.ID().getSymbol().line;
		console.log(linea);
		for (let i = ctx.getChildCount() - 1; i >= 1; i--) {
			args.push(this.visit(ctx.getChild(i)));
		}
		for (let i = 1; i < ctx.getChildCount(); i++) {
			if (i == 1) {
				let params = SymbolTable.getEnvAndLocal(ctx.ID().getText(), linea);
				this.block.addInstruccion(new Instruccion(MNEMONICS.BLD, params));
			}
			this.block.addInstruccion(new Instruccion(MNEMONICS.APP, [args.pop()]));
		}
	}

	  
  visitFuntionArgs(ctx){
    if(ctx.getChildCount() == 2){ return 0;}
    else{return this.visit(ctx.argumentList());}
  }
  
	visitArgumentList(ctx) {
		let args = 0;
		for (let i = 0; i < ctx.getChildCount(); i += 2) {
			this.visit(ctx.getChild(i));
			args += 1;
		}
		return args;
	}

	visitBuiltinFunction(ctx) {
		this.visit(ctx.expression());
		if (ctx.PRINT()) {
			this.block.addInstruccion(new Instruccion(MNEMONICS.PRN));
		}
		if (ctx.INPUT()) {
			this.block.addInstruccion(new Instruccion(MNEMONICS.INP));
		}
		if (ctx.LEN()) {
			this.block.addInstruccion(new Instruccion(MNEMONICS.LEN));
		}
	}

	visitLiteral(ctx) {
		if (ctx.STRING()) {
			this.block.addInstruccion(new Instruccion(MNEMONICS.LDV, [ctx.STRING().getText()]));
		}

		if (ctx.ID()) {
			//Buscar en el diccionario / Si no error //
			let params = SymbolTable.getEnvAndLocal(ctx.ID().getText());
			this.block.addInstruccion(new Instruccion(MNEMONICS.BLD, params));
		}

		if (ctx.NUMBER()) {
			this.block.addInstruccion(new Instruccion(MNEMONICS.LDV, [parseInt(ctx.NUMBER().getText(), 10)]));
		}
	}

	//Declaration
	visitDeclaration(ctx) {
		if (ctx.letDeclaration()) {
			this.visit(ctx.letDeclaration());
		}
	}

	visitConstDeclaration(ctx) {
		//Ver como quitar esta repeticion
		this.visit(ctx.expression());
		//Diccionario
		let params = SymbolTable.addIdentifier(ctx.ID().getText(), 'const', null, ctx.start.line);
		this.block.addInstruccion(new Instruccion(MNEMONICS.BST, params));
	}

	visitLetDeclaration(ctx) {
		this.visit(ctx.expression());
		//Diccionario
		let params = SymbolTable.addIdentifier(ctx.ID().getText(), 'let', null, ctx.start.line);
		this.block.addInstruccion(new Instruccion(MNEMONICS.BST, params));
	}

	//Lambda
	visitLambda(ctx) {
		SymbolTable.addScope('');
		if (ctx.letInDeclaration()) {
			this.visit(ctx.letInDeclaration());
		} else {
			//=============================================================================================
			for (let i = 0; i < ctx.params().getChildCount(); i++) {
				const paramNode = ctx.params().getChild(i);

				if (paramNode.symbol && paramNode.symbol.type === biesCLexer.ID) {
					SymbolTable.addIdentifier(paramNode.getText(), 'param', null, ctx.start.line);
				}
			}
			//==============================================================================================
			let cantParams = 0;
			if (ctx.params().getChildCount() == 1 || ctx.params().getChildCount() == 3) {
				cantParams = 1;
			}
			if (ctx.params().getChildCount() == 2) {
				cantParams = 0;
			}
			if (ctx.params().getChildCount() > 3) {
				for (let i = 1; i < ctx.params().getChildCount(); i += 2) {
					cantParams += 1;
				}
			}
			let lambda = new ASTLambda(this.block.getCantBlocks() + 1, cantParams, `$${this.block.getId()}`);
			this.block.addBlock(lambda.visitL(ctx));
			this.block.addInstruccion(new Instruccion(MNEMONICS.LDF, [`$${SymbolTable.getCurrentScopeId()}`]));
		}
		SymbolTable.exitScope();
	}

	visitLetInDeclaration(ctx) {
		let letIn = new ASTLetIn(this.block.getCantBlocks() + 1, 0, `$${this.block.getId()}`);
		this.block.addBlock(letIn.visitLI(ctx));
		this.block.addInstruccion(new Instruccion(MNEMONICS.LDF, [`$${SymbolTable.getCurrentScopeId()}`]));
		this.block.addInstruccion(new Instruccion(MNEMONICS.APP, [0]));
	}

	visitBlockExpression(ctx) {
		if (ctx.expression()) {
			this.visit(ctx.expression());
		}
		if (ctx.statement()) {
			this.visit(ctx.statement());
		}
	}

	visitBlockDeclaration(ctx) {
		for (let i = 1; i < ctx.getChildCount() - 1; i++) {
			this.visit(ctx.getChild(i));
		}
	}
}

class ASTLambda extends ASTCode {
	constructor(id, argument, parent) {
		super(id, argument, parent);
	}

	visitL(ctx) {
		this.visit(ctx.blockExpression());
		this.block.addInstruccion(new Instruccion(MNEMONICS.RET));
		this.block.addInstruccion(new Instruccion(`$END $${this.block.getId()}`));
		return this.block;
	}
}

class ASTLetIn extends ASTCode {
	constructor(id, argument, parent) {
		super(id, argument, parent);
	}

	visitLI(ctx) {
		this.visit(ctx.blockDeclaration());
		this.visit(ctx.blockExpression());
		this.block.addInstruccion(new Instruccion(MNEMONICS.RET));
		this.block.addInstruccion(new Instruccion(`$END $${this.block.getId()}`));
		return this.block;
	}
}

class ASTIfElse extends ASTCode {
	constructor(id = 0, argument = 0, parent = 0) {
		super(id, argument, parent);
	}

	visitIE(ctx) {
		this.visit(ctx.blockExpression());
		return this.block;
	}
}

export default ASTCode;
export { ASTLambda, ASTLetIn, ASTIfElse };
