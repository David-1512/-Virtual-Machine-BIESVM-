import biesCVisitor from '../../parser/grammar/biesCVisitor.js';
import biesCLexer from '../../parser/grammar/biesCLexer.js';
import Block from '../code/block.js';
import Instruccion from '../code/Instruccion.js';
import SymbolTable from '../semantic/symbol_table.js';
import { MNEMONICS } from '../code_generator/mnemonics.js';

class ASTCode extends biesCVisitor {
	constructor(argument, parent) {
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
   
  

    /*visitLogicalOrExpression(ctx) {
		if (ctx.getChildCount() > 1) {
			this.visit(ctx.getChild(0));
			for (let i = 1; i < ctx.getChildCount(); i++) {
				this.visit(ctx.getChild(i));
				const operator = ctx.getChild(i - 1).getText();
				if (operator === '||') {	this.block.addInstruccion(new Instruccion(MNEMONICS.OR));	}
			}
		} else {
			this.visit(ctx.logicalAndExpression());
		}
	}

	visitLogicalAndExpression(ctx) { 
    if (ctx.getChildCount() > 1) {
			this.visit(ctx.getChild(0));
			for (let i = 1; i < ctx.getChildCount(); i++) {
				this.visit(ctx.getChild(i));
				const operator = ctx.getChild(i - 1).getText();
				if (operator === '&&') {	this.block.addInstruccion(new Instruccion(MNEMONICS.AND));	}
			}
		} else {
      this.visit(ctx.equalityExpression());	
		}
  }

	visitEqualityExpression(ctx) {
		if (ctx.getChildCount() > 1) {
			this.visit(ctx.getChild(0));
			for (let i = 1; i < ctx.getChildCount(); i++) {
				this.visit(ctx.getChild(i));
				const operator = ctx.getChild(i - 1).getText();
				if (operator === '==') {	this.block.addInstruccion(new Instruccion(MNEMONICS.EQ));	}
				if (operator === '!=') {	this.block.addInstruccion(new Instruccion(MNEMONICS.NEQ));	} 
			}
		} else {
			this.visit(ctx.relationalExpression());
		}
	}

	visitRelationalExpression(ctx) {
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
	}*/

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
		
    if (ctx.list()) {this.visit(ctx.list());}

    if(ctx.listAccess()){this.visit(ctx.listAccess());}
	}

  visitListAccess(ctx){
    let linea = ctx.ID().getSymbol().line;
    let params = SymbolTable.getEnvAndLocal(ctx.ID().getText(), linea);
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
		let linea = ctx.ID().getSymbol().line;
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
		//if (ctx.letDeclaration()) {this.visit(ctx.letDeclaration());}
   // if(ctx.constDeclaration()) {this.visit(ctx.constDeclaration());}
   // if(ctx.varDeclaration()) {this.visit(ctx.varDeclaration());}
    if(ctx.letDeclaration()) {this.visitVarLetDeclaration(ctx.letDeclaration());}
    if(ctx.constDeclaration()) {this.visit(ctx.constDeclaration());}
    if(ctx.varDeclaration()) {this.visitVarLetDeclaration(ctx.varDeclaration());}
    if(ctx.funDeclaration()) {this.visit(ctx.funDeclaration());}
	}

  visitFunDeclaration(ctx){
    let params = SymbolTable.addIdentifier(ctx.ID().getText(), 'const', null, ctx.start.line);
    this.visit(ctx.lambda()); //Aqui esta el detalle
		this.block.addInstruccion(new Instruccion(MNEMONICS.BST, params));
  }
  
  visitVarLetDeclaration(ctx){
    this.visit(ctx.expression());
		let params = SymbolTable.addIdentifier(ctx.ID().getText(), 'const', null, ctx.start.line);
		this.block.addInstruccion(new Instruccion(MNEMONICS.BST, params));
  }

  visitConstDeclaration(ctx) {
		this.visit(ctx.expression());
		let params = SymbolTable.addIdentifier(ctx.ID().getText(), 'const', null, ctx.start.line);
		this.block.addInstruccion(new Instruccion(MNEMONICS.BST, params));
	}


  /*visitVarDeclaration(ctx){
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
	}*/

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
	constructor(argument, parent) {
		super(argument, parent);
	}

	visitL(ctx) {
		this.visit(ctx.blockExpression());
		this.block.addInstruccion(new Instruccion(MNEMONICS.RET));
		this.block.addInstruccion(new Instruccion(`$END $${this.block.getId()}`));
		return this.block;
	}
}

class ASTLetIn extends ASTCode {
	constructor(argument, parent) {
		super(argument, parent);
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
	constructor(argument = 0, parent = 0) {
		super(argument, parent);
	}

	visitIE(ctx) {
		this.visit(ctx.blockExpression());
		return this.block;
	}
}

export default ASTCode;
export { ASTLambda, ASTLetIn, ASTIfElse };
