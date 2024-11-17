import biesCVisitor from '../../../parser/grammar/biesCVisitor.js';
import biesCLexer from '../../../parser/grammar/biesCLexer.js';
import Block from '../code/block.js';
import Instruccion from '../code/instruccion.js';
import SymbolTable from '../semantic/symbol_table.js';
import { MNEMONICS } from '../../constants/mnemonics.js';

class ASTCode extends biesCVisitor {
	constructor(argument) {
		super();
		this.block = new Block(SymbolTable.getCurrentScopeId(), argument, `$${SymbolTable.getParentCurrentScopeID()}`);
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

	visitGenericExpression(ctx) {
		if (ctx.getChildCount() > 1) {
			this.visit(ctx.getChild(0));
			for (let i = 1; i < ctx.getChildCount(); i++) {
				const operator = ctx.getChild(i - 1).getText(); 
				this.visit(ctx.getChild(i)); 
				switch(operator){
					case '||': this.block.addInstruccion(new Instruccion(MNEMONICS.OR)); break;
					case '&&': this.block.addInstruccion(new Instruccion(MNEMONICS.AND)); break;
					case '==': this.block.addInstruccion(new Instruccion(MNEMONICS.EQ)); break;
					case '!=': this.block.addInstruccion(new Instruccion(MNEMONICS.NEQ)); break;
					case '>': this.block.addInstruccion(new Instruccion(MNEMONICS.GT)); break;
					case '>=': this.block.addInstruccion(new Instruccion(MNEMONICS.GTE)); break;
					case '<': this.block.addInstruccion(new Instruccion(MNEMONICS.LT)); break;
					case '<=': this.block.addInstruccion(new Instruccion(MNEMONICS.LTE)); break;
					case '+': this.block.addInstruccion(new Instruccion(MNEMONICS.ADD)); break;
					case '-': this.block.addInstruccion(new Instruccion(MNEMONICS.SUB)); break;
					case '*': this.block.addInstruccion(new Instruccion(MNEMONICS.MUL)); break;
					case '/': this.block.addInstruccion(new Instruccion(MNEMONICS.DIV)); break;
					case '**': this.block.addInstruccion(new Instruccion(MNEMONICS.POW)); break;
				}
			}
		}
		else {this.visit(ctx.getChild(0));}
	}

	visitExpression(ctx) {this.visitGenericExpression(ctx.logicalOrExpression());	}
	visitLogicalOrExpression(ctx) { this.visitGenericExpression(ctx); }
	visitLogicalAndExpression(ctx) { this.visitGenericExpression(ctx); }
	visitEqualityExpression(ctx) { this.visitGenericExpression(ctx); }
	visitRelationalExpression(ctx) { this.visitGenericExpression(ctx); }
	visitAdditiveExpression(ctx) { this.visitGenericExpression(ctx); }
	visitMultiplicativeExpression(ctx) { this.visitGenericExpression(ctx); }
	visitExponentialExpression(ctx) { this.visit(ctx.unaryExpression()); }

	visitUnaryExpression(ctx) {
    if (ctx.getChildCount() === 2) {
				const operator = ctx.getChild(0).getText();
        this.visit(ctx.getChild(1));
				if (operator === '!') {this.block.addInstruccion(new Instruccion(MNEMONICS.NEG));} //Preguntar
        if (operator === '-') {this.block.addInstruccion(new Instruccion(MNEMONICS.NEG));}
    } 
    else {this.visit(ctx.primaryExpression());}
	}

	visitPrimaryExpression(ctx) {
		if (ctx.builtinFunction()) {this.visit(ctx.builtinFunction());}
		if (ctx.literal()) {this.visit(ctx.literal());}
		if (ctx.lambda()) {this.visit(ctx.lambda());}
		if (ctx.expression()) {this.visit(ctx.expression());}
		if (ctx.functionCallChain()) {this.visit(ctx.functionCallChain());}
		if (ctx.ifExpression()) {this.visit(ctx.ifExpression());}
        if (ctx.list()) {this.visit(ctx.list());}
        if(ctx.listAccess()){this.visit(ctx.listAccess());}
	}

	visitListAccess(ctx){
		let params = SymbolTable.getEnvAndLocal(ctx.ID().getText(), ctx.start.line);
		this.block.addInstruccion(new Instruccion(MNEMONICS.BLD, params));
		this.visit(ctx.expression());
		this.block.addInstruccion(new Instruccion(MNEMONICS.LTK));
	}

	visitList(ctx) {
		this.block.addInstruccion(new Instruccion(MNEMONICS.LDV,['[]']));
		for (let i = ctx.getChildCount() - 2; i >= 1; i-=2) {
			this.visit(ctx.getChild(i));
			this.block.addInstruccion(new Instruccion(MNEMONICS.LIN));
		}
	}

	visitIfExpression(ctx) {
		this.visit(ctx.expression());
		this.visit(ctx.thenExpr());
		this.visit(ctx.elseExpr());
	}

	visitThenExpr(ctx) {
		let thenAST = new ASTIfElse();
		let thenPart = thenAST.visitIE(ctx);
		this.block.addInstruccion(new Instruccion(MNEMONICS.BF, [thenPart.getCantInstruccions() + 2]));
		this.thenElseInstruccions(thenPart.getInstruccions());
	}

	visitElseExpr(ctx) {
		let elseAST = new ASTIfElse();
		let elsePart = elseAST.visitIE(ctx);
		this.block.addInstruccion(new Instruccion(MNEMONICS.BR, [elsePart.getCantInstruccions()+1]));
		this.thenElseInstruccions(elsePart.getInstruccions());
	}

	thenElseInstruccions(instruccions) {
		for (const instruccion of instruccions) {
			this.block.addInstruccion(instruccion);
		}
	}

	visitFunctionCallChain(ctx) {
		let args = [];
		for (let i = ctx.getChildCount() - 1; i >= 1; i--) {
			args.push(this.visit(ctx.getChild(i)));
		}
		for (let i = 1; i < ctx.getChildCount(); i++) {
			if (i == 1) {
				let params = SymbolTable.getEnvAndLocal(ctx.ID().getText(), ctx.start.line);
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
		if (ctx.PRINT()) {this.block.addInstruccion(new Instruccion(MNEMONICS.PRN));}
		if (ctx.INPUT()) {this.block.addInstruccion(new Instruccion(MNEMONICS.INP));}
		if (ctx.LEN()) {this.block.addInstruccion(new Instruccion(MNEMONICS.LEN));}
		if (ctx.INT()) {this.block.addInstruccion(new Instruccion(MNEMONICS.CST,['number']));}
		if (ctx.STR()) {this.block.addInstruccion(new Instruccion(MNEMONICS.CST,['string']));}
		if (ctx.BOOL()) {this.block.addInstruccion(new Instruccion(MNEMONICS.CST,['bool']));}
		if (ctx.LIST()) {this.block.addInstruccion(new Instruccion(MNEMONICS.CST,['list']));}
	}

	visitLiteral(ctx) {
		if (ctx.STRING()) {this.block.addInstruccion(new Instruccion(MNEMONICS.LDV, [ctx.STRING().getText()]));}
		if (ctx.ID()) {		
			let params = SymbolTable.getEnvAndLocal(ctx.ID().getText(),ctx.start.line);
			this.block.addInstruccion(new Instruccion(MNEMONICS.BLD, params));
		}
		if (ctx.NUMBER()) {this.block.addInstruccion(new Instruccion(MNEMONICS.LDV, [parseInt(ctx.NUMBER().getText())]));}
		if(ctx.NULL()){this.block.addInstruccion(new Instruccion(MNEMONICS.LDV, ['null']));}
	    if(ctx.FALSE()){this.block.addInstruccion(new Instruccion(MNEMONICS.LDV, ['false']));}
		if(ctx.TRUE()){ this.block.addInstruccion(new Instruccion(MNEMONICS.LDV, ['true']));}
	}

	visitDeclaration(ctx) {
	    if (ctx.letDeclaration()) {this.visit(ctx.letDeclaration());}
        if(ctx.constDeclaration()) {this.visit(ctx.constDeclaration());}
        if(ctx.varDeclaration()) {this.visit(ctx.varDeclaration());}
        if(ctx.funDeclaration()) {this.visit(ctx.funDeclaration());}
		if(ctx.nullInitDeclaration()) {this.visit(ctx.nullInitDeclaration());}
		if(ctx.reasignation()) {this.visit(ctx.reasignation());}
	}


	visitConstDeclaration(ctx){this.visitAnyDeclaration(ctx,'const');}
	visitLetDeclaration(ctx){this.visitAnyDeclaration(ctx,'let');}
	visitVarDeclaration(ctx){this.visitAnyDeclaration(ctx,'var');}

    visitAnyDeclaration(ctx,declaration){
		let params = SymbolTable.addIdentifier(ctx.ID().getText(),declaration, null, ctx.start.line);
		this.visit(ctx.expression());		
		this.block.addInstruccion(new Instruccion(MNEMONICS.BST, params));
	}
    
    visitNullInitDeclaration(ctx){
		let type = (ctx.LET())?'let':'var';
		let params = SymbolTable.addIdentifier(ctx.ID().getText(),type, null, ctx.start.line);
		this.block.addInstruccion(new Instruccion(MNEMONICS.LDV, ['null']));
		this.block.addInstruccion(new Instruccion(MNEMONICS.BST, params));
	}

	visitReasignation(ctx){
		let params = SymbolTable.reassignIdentifier(ctx.ID().getText(),null, ctx.start.line);
		this.visit(ctx.expression());		
		this.block.addInstruccion(new Instruccion(MNEMONICS.BST, params));
	}

	visitFunDeclaration(ctx){  //Esta falta
		let params = SymbolTable.addIdentifier(ctx.ID().getText(), 'function', null, ctx.start.line);
		this.visit(ctx.lambda()); //Aqui esta el detalle
			this.block.addInstruccion(new Instruccion(MNEMONICS.BST, params));
	}
	
	visitLambda(ctx) {
		SymbolTable.addScope('');			
		if (ctx.letInDeclaration()) {
			this.visit(ctx.letInDeclaration());
		} else {
			for (let i = 0; i < ctx.params().getChildCount(); i++) {
				const paramNode = ctx.params().getChild(i);
				if (paramNode.symbol && paramNode.symbol.type === biesCLexer.ID) {
					SymbolTable.addIdentifier(paramNode.getText(), 'param', null, ctx.start.line);
				}
			}
			let cantParams = 0;
			if (ctx.params().getChildCount() == 1 || ctx.params().getChildCount() == 3) {cantParams = 1;}
			if (ctx.params().getChildCount() == 2) {cantParams = 0;}
			if (ctx.params().getChildCount() > 3) {
				for (let i = 1; i < ctx.params().getChildCount(); i += 2) {cantParams += 1;}
			}
			let lambda = new ASTLambda(cantParams);
			this.block.addBlock(lambda.visitL(ctx));
			this.block.addInstruccion(new Instruccion(MNEMONICS.LDF, [`$${SymbolTable.getCurrentScopeId()}`]));
		}
		SymbolTable.exitScope();
	}

	visitLetInDeclaration(ctx) {
		let letIn = new ASTLetIn(0);
		this.block.addBlock(letIn.visitLI(ctx));
		this.block.addInstruccion(new Instruccion(MNEMONICS.LDF, [`$${SymbolTable.getCurrentScopeId()}`]));
		this.block.addInstruccion(new Instruccion(MNEMONICS.APP, [0]));
	}

	visitBlockExpression(ctx) {
		if (ctx.expression()) {this.visit(ctx.expression());}
		if (ctx.statement()) {this.visit(ctx.statement());}
	}

	visitBlockDeclaration(ctx) {
		for (let i = 1; i < ctx.getChildCount() - 1; i++) {this.visit(ctx.getChild(i));}
    }
}

class ASTLambda extends ASTCode {
	constructor(argument) {
		super(argument);
	}

	visitL(ctx) {
		this.visit(ctx.blockExpression());
		this.block.addInstruccion(new Instruccion(MNEMONICS.RET));
		this.block.addInstruccion(new Instruccion(`$END $${this.block.getId()}`));
		return this.block;
	}
}

class ASTLetIn extends ASTCode {
	constructor(argument) {
		super(argument);
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
	constructor(argument = 0) {
		super(argument);
	}

	visitIE(ctx) {
		this.visit(ctx.blockExpression());
		return this.block;
	}
}

export default ASTCode;
export { ASTLambda, ASTLetIn, ASTIfElse};
