/**
 * @file ast_code.js
 * @description Este archivo define clases para representar el Árbol de Sintaxis Abstracta (AST) y su generación de código para el compilador BiesC.
 * Proporciona un conjunto de visitantes basados en ANTLR que generan instrucciones para la máquina virtual BiesVM.
 *
 * @module ast_code
 *
 * @project biesC
 * Proyecto académico para implementar un compilador para un lenguaje funcional basado en pila (BiesVM).
 *
 * @author David Serrano Medrano
 * @author Leandro Mora Corrales
 * @author Xiara Suarez Alpizar
 *
 * @version 1.0.0
 * @since 17-11-2024
 *
 */




import biesCVisitor from '../../../parser/grammar/biesCVisitor.js';
import biesCLexer from '../../../parser/grammar/biesCLexer.js';
import Block from '../code/block.js';
import Instruccion from '../code/instruccion.js';
import SymbolTable from '../semantic/symbol_table.js';
import { MNEMONICS } from '../../constants/mnemonics.js';

/**
 * Clase principal que extiende el visitante de ANTLR para generar el código de la máquina virtual.
 * @class
 */
class ASTCode extends biesCVisitor {

	/**
     * Constructor de la clase ASTCode.
     * @param {string} argument - Argumento utilizado para crear el bloque de código.
     */
	constructor(argument) {
		super();
		this.block = new Block(SymbolTable.getCurrentScopeId(), 
			argument, 
			`$${SymbolTable.getParentCurrentScopeID()}`);
	}

	/**
     * Visita el nodo raíz del programa y genera las instrucciones correspondientes.
     * @param {Object} ctx - Contexto del nodo del programa.
     * @returns {Block} Bloque de código generado.
     */
	visitProgram(ctx) {
		ctx.statement().forEach(this.visit.bind(this));
		this.block.addInstruccion(new Instruccion(MNEMONICS.HLT));
		this.block.addInstruccion(new Instruccion(`$END $${this.block.getId()}`));
		this.block.addInstruccion(new Instruccion(`${MNEMONICS.INI} $${this.block.getId()}`));
		return this.block;
	}

	/**
     * Visita los nodos de declaración y expresión dentro de una sentencia.
     * @param {Object} ctx - Contexto de la sentencia.
     */
	visitStatement(ctx) {
		if (ctx.expression()) {	this.visit(ctx.expression()); }
		if (ctx.declaration()) { this.visit(ctx.declaration());	}
	}

	/**
     * Genera las instrucciones para una expresión genérica.
     * @param {Object} ctx - Contexto de la expresión genérica.
     */
	visitGenericExpression(ctx) {
		const childCount = ctx.getChildCount();
		if (childCount > 1) {
			this.visit(ctx.getChild(0));
			for (let i = 1; i < childCount; i++) {		
				console.log(`Hijo: ${ctx.getChild(i).getText()}`); // Verifica el hijo		
				const operator = ctx.getChild(i - 1).getText();
				console.log(`Operador: ${operator}`); // Verifica el operador
				this.visit(ctx.getChild(i));
				const mnemonic = this.getMnemonic(operator);
				if (mnemonic) this.block.addInstruccion(new Instruccion(mnemonic));
			}
		} else {
			this.visit(ctx.getChild(0));
		}
	}

	/**
     * Mapea un operador a un mnemónico de la máquina virtual.
     * @param {string} operator - Operador de la expresión.
     * @returns {string} El mnemónico correspondiente.
     */
    getMnemonic(operator) {
        const mapping = {
            '||': MNEMONICS.OR,
            '&&': MNEMONICS.AND,
            '==': MNEMONICS.EQ,
            '!=': MNEMONICS.NEQ,
            '>': MNEMONICS.GT,
            '>=': MNEMONICS.GTE,
            '<': MNEMONICS.LT,
            '<=': MNEMONICS.LTE,
            '+': MNEMONICS.ADD,
            '-': MNEMONICS.SUB,
			'**': MNEMONICS.POW,
            '*': MNEMONICS.MUL,
            '/': MNEMONICS.DIV,
            
        };
        return mapping[operator];
    }

	 /**
     * Visita las expresiones lógicas OR y AND.
     * @param {Object} ctx - Contexto de la expresión.
     */
	visitExpression(ctx) {this.visitGenericExpression(ctx.logicalOrExpression());	}
	visitLogicalOrExpression(ctx) { this.visitGenericExpression(ctx); }
	visitLogicalAndExpression(ctx) { this.visitGenericExpression(ctx); }
	visitEqualityExpression(ctx) { this.visitGenericExpression(ctx); }
	visitRelationalExpression(ctx) { this.visitGenericExpression(ctx); }
	visitAdditiveExpression(ctx) { this.visitGenericExpression(ctx); }
	visitMultiplicativeExpression(ctx) { this.visitGenericExpression(ctx); }
	visitExponentialExpression(ctx) { this.visitGenericExpression(ctx); }  //EL ERROR DE POW ESTA ACÁ

	/**
     * Visita la expresión unaria y genera las instrucciones correspondientes.
     * @param {Object} ctx - Contexto de la expresión unaria.
     */
	visitUnaryExpression(ctx) {
    if (ctx.getChildCount() === 2) {
				const operator = ctx.getChild(0).getText();
        this.visit(ctx.getChild(1));
				if (operator === '!') {this.block.addInstruccion(new Instruccion(MNEMONICS.NEG));} //Preguntar
        if (operator === '-') {this.block.addInstruccion(new Instruccion(MNEMONICS.NEG));}
    } 
    else {this.visit(ctx.primaryExpression());}
	}

	/**
     * Visita las expresiones primarias y genera las instrucciones correspondientes.
     * @param {Object} ctx - Contexto de la expresión primaria.
     */
	visitPrimaryExpression(ctx) {
        ctx.builtinFunction() && this.visit(ctx.builtinFunction());
        ctx.literal() && this.visit(ctx.literal());
        ctx.lambda() && this.visit(ctx.lambda());
        ctx.expression() && this.visit(ctx.expression());
        ctx.functionCallChain() && this.visit(ctx.functionCallChain());
        ctx.ifExpression() && this.visit(ctx.ifExpression());
        ctx.list() && this.visit(ctx.list());
        ctx.listAccess() && this.visit(ctx.listAccess());
    }

	 /**
     * Genera las instrucciones para acceder a un elemento de una lista.
     * @param {Object} ctx - Contexto de acceso a lista.
     */
	visitListAccess(ctx){
		let params = SymbolTable.getEnvAndLocal(ctx.ID().getText(), ctx.start.line);
		this.block.addInstruccion(new Instruccion(MNEMONICS.BLD, params));
		this.visit(ctx.expression());
		this.block.addInstruccion(new Instruccion(MNEMONICS.LTK));
	}

	/**
     * Genera las instrucciones para crear una lista.
     * @param {Object} ctx - Contexto de la lista.
     */
	visitList(ctx) {
		this.block.addInstruccion(new Instruccion(MNEMONICS.LDV,['[]']));
		for (let i = ctx.getChildCount() - 2; i >= 1; i-=2) {
			this.visit(ctx.getChild(i));
			this.block.addInstruccion(new Instruccion(MNEMONICS.LIN));
		}
	}

	/**
     * Genera las instrucciones para una expresión condicional if-else.
     * @param {Object} ctx - Contexto de la expresión if.
     */
	visitIfExpression(ctx) {
		this.visit(ctx.expression());
		this.visit(ctx.thenExpr());
		this.visit(ctx.elseExpr());
	}

	/**
     * Genera las instrucciones para la parte "then" de una expresión if.
     * @param {Object} ctx - Contexto de la parte "then".
     */
	visitThenExpr(ctx) {
		let thenAST = new ASTIfElse();
		let thenPart = thenAST.visitIE(ctx);
		this.block.addInstruccion(new Instruccion(MNEMONICS.BF, [thenPart.getCantInstruccions() + 2]));
		this.thenElseInstruccions(thenPart.getInstruccions());
	}

	/**
     * Genera las instrucciones para la parte "else" de una expresión if.
     * @param {Object} ctx - Contexto de la parte "else".
     */
	visitElseExpr(ctx) {
		let elseAST = new ASTIfElse();
		let elsePart = elseAST.visitIE(ctx);
		this.block.addInstruccion(new Instruccion(MNEMONICS.BR, [elsePart.getCantInstruccions() + 1]));
		this.thenElseInstruccions(elsePart.getInstruccions());
	}

	 /**
     * Agrega las instrucciones del bloque if-else al bloque de código.
     * @param {Array} instruccions - Instrucciones a agregar.
     */
	thenElseInstruccions(instruccions) {
        instruccions.forEach((instruccion) => {
            this.block.addInstruccion(instruccion);
        });
    }

	 /**
     * Genera las instrucciones para una llamada a una función.
     * @param {Object} ctx - Contexto de la llamada a función.
     */
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

	/**
	 * Visita los argumentos de una función y determina si es un único argumento o una lista de argumentos.
	 * @param {Object} ctx - El contexto para visitar los argumentos de la función.
	 * @returns {number} El número de argumentos, 0 si no hay, de lo contrario, devuelve el número de argumentos.
	 */
	visitFuntionArgs(ctx) {
        return ctx.getChildCount() === 2 ? 0 : this.visit(ctx.argumentList());
    }

	/**
	 * Visita y cuenta los argumentos en una lista de argumentos de una función.
	 * @param {Object} ctx - El contexto para visitar la lista de argumentos.
	 * @returns {number} El número de argumentos.
	 */
	visitArgumentList(ctx) {
		let args = 0;
		for (let i = 0; i < ctx.getChildCount(); i += 2) {
			this.visit(ctx.getChild(i));
			args += 1;
		}
		return args;
	}

	// visitBuiltinFunction(ctx) {
	// 	this.visit(ctx.expression());
	// 	if (ctx.PRINT()) {this.block.addInstruccion(new Instruccion(MNEMONICS.PRN));}
	// 	if (ctx.INPUT()) {this.block.addInstruccion(new Instruccion(MNEMONICS.INP));}
	// 	if (ctx.LEN()) {this.block.addInstruccion(new Instruccion(MNEMONICS.LEN));}
	// 	if (ctx.INT()) {this.block.addInstruccion(new Instruccion(MNEMONICS.CST,['number']));}
	// 	if (ctx.STR()) {this.block.addInstruccion(new Instruccion(MNEMONICS.CST,['string']));}
	// 	if (ctx.BOOL()) {this.block.addInstruccion(new Instruccion(MNEMONICS.CST,['bool']));}
	// 	if (ctx.LIST()) {this.block.addInstruccion(new Instruccion(MNEMONICS.CST,['list']));}
	// }

	/**
	 * Visita y procesa las funciones integradas (como PRINT, INPUT, etc.) y agrega las instrucciones correspondientes.
	 * @param {Object} ctx - El contexto para visitar una función integrada.
	 */
	visitBuiltinFunction(ctx) {
        this.visit(ctx.expression());
        
        const builtinFunctions = {
            'PRINT': MNEMONICS.PRN,
            'INPUT': MNEMONICS.INP,
            'LEN': MNEMONICS.LEN,
            'INT': [MNEMONICS.CST, 'number'],
            'STR': [MNEMONICS.CST, 'string'],
            'BOOL': [MNEMONICS.CST, 'bool'],
            'LIST': [MNEMONICS.CST, 'list']
        };

        Object.entries(builtinFunctions).forEach(([funcName, mnemonic]) => {
            if (ctx[funcName]()) {
                Array.isArray(mnemonic) 
                    ? this.block.addInstruccion(new Instruccion(mnemonic[0], [mnemonic[1]]))
                    : this.block.addInstruccion(new Instruccion(mnemonic));
            }
        });
    }


	/**
	 * Visita y procesa los valores literales como cadenas, números, booleanos o null.
	 * @param {Object} ctx - El contexto para visitar un literal.
	 */
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

	/**
	 * Visita y procesa las declaraciones en el código, como let, const, var, funciones y reasignaciones.
	 * @param {Object} ctx - El contexto para visitar las declaraciones.
	 */
	visitDeclaration(ctx) {
        ctx.letDeclaration() && this.visit(ctx.letDeclaration());
        ctx.constDeclaration() && this.visit(ctx.constDeclaration());
        ctx.varDeclaration() && this.visit(ctx.varDeclaration());
        ctx.funDeclaration() && this.visit(ctx.funDeclaration());
        ctx.nullInitDeclaration() && this.visit(ctx.nullInitDeclaration());
        ctx.reasignation() && this.visit(ctx.reasignation());
    }

	/**
	 * Visita la declaración de una constante y agrega la instrucción correspondiente.
	 * @param {Object} ctx - El contexto para visitar la declaración de la constante.
	 */
	visitConstDeclaration(ctx) { this.visitAnyDeclaration(ctx, 'const'); }
	/**
	 * Visita la declaración de una variable let y agrega la instrucción correspondiente.
	 * @param {Object} ctx - El contexto para visitar la declaración de la variable let.
	 */
    visitLetDeclaration(ctx) { this.visitAnyDeclaration(ctx, 'let'); }

	/**
	 * Visita la declaración de una variable var y agrega la instrucción correspondiente.
	 * @param {Object} ctx - El contexto para visitar la declaración de la variable var.
	 */
    visitVarDeclaration(ctx) { this.visitAnyDeclaration(ctx, 'var'); }

	/**
	 * Visita cualquier tipo de declaración y agrega la instrucción correspondiente.
	 * @param {Object} ctx - El contexto de la declaración.
	 * @param {string} declaration - El tipo de declaración (let, var, const).
	 */
    visitAnyDeclaration(ctx,declaration){
		let params = SymbolTable.addIdentifier(ctx.ID().getText(),declaration, null, ctx.start.line);
		this.visit(ctx.expression());		
		this.block.addInstruccion(new Instruccion(MNEMONICS.BST, params));
	}
    
	/**
	 * Visita la declaración de inicialización nula y agrega la instrucción correspondiente.
	 * @param {Object} ctx - El contexto para visitar la declaración de inicialización nula.
	 */
    visitNullInitDeclaration(ctx){
		let type = (ctx.LET())?'let':'var';
		let params = SymbolTable.addIdentifier(ctx.ID().getText(),type, null, ctx.start.line);
		this.block.addInstruccion(new Instruccion(MNEMONICS.LDV, ['null']));
		this.block.addInstruccion(new Instruccion(MNEMONICS.BST, params));
	}

	/**
	 * Visita una reasignación de variable y agrega la instrucción correspondiente.
	 * @param {Object} ctx - El contexto para visitar la reasignación.
	 */
	visitReasignation(ctx){
		let params = SymbolTable.reassignIdentifier(ctx.ID().getText(),null, ctx.start.line);
		this.visit(ctx.expression());		
		this.block.addInstruccion(new Instruccion(MNEMONICS.BST, params));
	}

	
	/**
	 * Visita la declaración de una función y agrega la instrucción correspondiente.
	 * @param {Object} ctx - El contexto para visitar la declaración de la función.
	 */
	visitFunDeclaration(ctx){ 
		let params = SymbolTable.addIdentifier(ctx.ID().getText(),'function', null, ctx.start.line);
		SymbolTable.addScope('');
		for (let i = 0; i < ctx.paramsFun().getChildCount(); i++) {
			const paramNode = ctx.paramsFun().getChild(i);
			if (paramNode.symbol && paramNode.symbol.type === biesCLexer.ID) {
				SymbolTable.addIdentifier(paramNode.getText(), 'param', null, ctx.start.line);
			}
		}
		let cantParams = 0;
			if (ctx.paramsFun().getChildCount() == 1 || ctx.paramsFun().getChildCount() == 3) {cantParams = 1;}
			if (ctx.paramsFun().getChildCount() == 2) {cantParams = 0;}
			if (ctx.paramsFun().getChildCount() > 3) {
				for (let i = 1; i < ctx.paramsFun().getChildCount(); i += 2) {cantParams += 1;}
			}
		if(ctx.letInDeclaration()){
			let fun = new ASTFun(cantParams);
			SymbolTable.addScope('');
			this.block.addBlock(fun.visitFUN(ctx));
			SymbolTable.exitScope();
		}
		if(ctx.blockExpression()){
			let lambda = new ASTLambda(cantParams);
			this.block.addBlock(lambda.visitL(ctx));		
		}
		this.block.addInstruccion(new Instruccion(MNEMONICS.LDF, [`$${SymbolTable.getCurrentScopeId()}`]));
		this.block.addInstruccion(new Instruccion(MNEMONICS.BST, params));
		SymbolTable.exitScope();
	}
	
	/**
	 * Visita una lambda y agrega la instrucción correspondiente.
	 * @param {Object} ctx - El contexto para visitar una lambda.
	 */
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

	/**
	 * Visita la declaración de un bloque "Let In", que involucra una declaración dentro de un bloque
	 * con variables que tienen un alcance local al bloque.
	 * @param {Object} ctx - El contexto de la declaración "Let In".
	 */
	visitLetInDeclaration(ctx) {
		let letIn = new ASTLetIn(0);
		this.block.addBlock(letIn.visitLI(ctx));
		this.block.addInstruccion(new Instruccion(MNEMONICS.LDF, [`$${SymbolTable.getCurrentScopeId()}`]));
		this.block.addInstruccion(new Instruccion(MNEMONICS.APP, [0]));
	}

	/**
	 * Visita una expresión dentro de un bloque. La expresión puede ser una expresión o una declaración.
	 * @param {Object} ctx - El contexto de la expresión dentro del bloque.
	 */
	visitBlockExpression(ctx) {
		if (ctx.expression()) {this.visit(ctx.expression());}
		if (ctx.statement()) {this.visit(ctx.statement());}
	}

	/**
	 * Visita las declaraciones dentro de un bloque de código. Recorre los hijos de un bloque y
	 * visita cada uno de ellos.
	 * @param {Object} ctx - El contexto de las declaraciones dentro de un bloque.
	 */
	visitBlockDeclaration(ctx) {
		for (let i = 1; i < ctx.getChildCount() - 1; i++) {
			this.visit(ctx.getChild(i));
		}
    }
}

/**
 * Clase que representa una expresión de función lambda.
 * @class
 */
class ASTLambda extends ASTCode {
	constructor(argument) {
		super(argument);
	}

	/**
     * Visita la expresión de una función lambda, ejecutando las instrucciones correspondientes.
     * @param {Object} ctx - El contexto de la función lambda.
     * @returns {Object} El bloque de instrucciones generado.
     */
	visitL(ctx) {
		this.visit(ctx.blockExpression());
		this.block.addInstruccion(new Instruccion(MNEMONICS.RET));
		this.block.addInstruccion(new Instruccion(`$END $${this.block.getId()}`));
		return this.block;
	}
}

/**
 * Clase que representa una declaración "Let In", en la que las declaraciones y expresiones
 * ocurren dentro de un bloque específico.
 * @class
 */
class ASTLetIn extends ASTCode {
	constructor(argument) {
		super(argument);
	}

	/**
     * Visita una declaración "Let In" y sus correspondientes expresiones.
     * @param {Object} ctx - El contexto de la declaración "Let In".
     * @returns {Object} El bloque de instrucciones generado.
     */
	visitLI(ctx) {
		this.visit(ctx.blockDeclaration());
		this.visit(ctx.blockExpression());
		this.block.addInstruccion(new Instruccion(MNEMONICS.RET));
		this.block.addInstruccion(new Instruccion(`$END $${this.block.getId()}`));
		return this.block;
	}
}

/**
 * Clase que representa una expresión de control de flujo "If-Else".
 * @class
 */
class ASTIfElse extends ASTCode {
	constructor(argument = 0) {
		super(argument);
	}

	 /**
     * Visita una expresión "If-Else" y procesa la ejecución de las instrucciones correspondientes.
     * @param {Object} ctx - El contexto de la expresión "If-Else".
     * @returns {Object} El bloque de instrucciones generado.
     */
	visitIE(ctx) {
		this.visit(ctx.blockExpression());
		return this.block;
	}
}


/**
 * Clase que representa una declaración de función.
 * @class
 */
class ASTFun extends ASTCode {
	constructor(argument = 0) {
		super(argument);
	}

	 /**
     * Visita una declaración de función y genera las instrucciones correspondientes.
     * @param {Object} ctx - El contexto de la declaración de la función.
     * @returns {Object} El bloque de instrucciones generado.
     */
	visitFUN(ctx) {
		if(ctx.letInDeclaration()){this.visit(ctx.letInDeclaration());}
		this.block.addInstruccion(new Instruccion(MNEMONICS.RET));
		this.block.addInstruccion(new Instruccion(`$END $${this.block.getId()}`));
		return this.block;
	}
}

export default ASTCode;
export { ASTLambda, ASTLetIn, ASTIfElse, ASTFun};
