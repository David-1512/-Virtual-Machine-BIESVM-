/**
 * @file code_visitor.js
 * @description Clase que representa un visitante para el árbol de sintaxis abstracta (AST) en el intérprete BiesVM. 
 * Se encarga de construir la representación en código de las funciones e instrucciones encontradas.
 * @module CODE_VISITOR
 * 
 * @project biesVM
 * Proyecto académico donde se implementa una máquina virtual basada en pila para un lenguaje funcional llamado bies.
 * El objetivo principal es implementar un intérprete (biesVM) que procese y ejecute código ensamblador generado para este lenguaje.
 * 
 * @author David Serrano Medrano
 * @author Leandro Mora Corrales
 * @author Xiara Suarez Alpizar
 * @author Bryan Hernandez Hernández
 * 
 * @version 1.0.0
 * @since 15-10-2024
 */

import biesASMVisitor from '../../../parser/grammar/biesASMVisitor.js';
import Code from '../components/code/code.js';
import CodeFunction from '../components/code/code_function.js';
import Instruction from '../components/code/instruction.js';

/**
 * Clase que representa el visitante del código en el árbol de sintaxis abstracta.
 * @extends biesASMVisitor
 */
class CodeVisitor extends biesASMVisitor {
	 /**
     * Crea una instancia de CodeVisitor.
     */
	constructor() {
		super();
		this.code = new Code();
		this.currentFunction = null;
	}

	 /**
     * Visita el nodo del programa y procesa las funciones e instrucciones.
     * @param {Object} ctx - Contexto del programa.
     * @returns {Code} El código generado.
     */
	visitProgram(ctx) {
		[...ctx.funcion(), ...ctx.instruction()].forEach(this.visit.bind(this));
		return this.code;
	}

	 /**
     * Visita el nodo de una función, extrayendo detalles y procesando instrucciones.
     * @param {Object} ctx - Contexto de la función.
     */
	visitFuncion(ctx) {
		const { funcName, args, parent } = this._extractFunctionDetails(ctx.funinit());
		this.currentFunction = new CodeFunction(funcName, [], parent, args);

		ctx.instruction().forEach(this.visit.bind(this));
		this.code.addFunction(this.currentFunction);

		if (funcName === '$0') this.code.setMain(this.currentFunction);
		this.visit(ctx.funend());
	}

	 /**
     * Extrae los detalles de la función a partir del contexto de inicialización de la función.
     * @param {Object} funinitCtx - Contexto de inicialización de la función.
     * @returns {Object} Objeto con detalles de la función: nombre, argumentos y padre.
     */
	_extractFunctionDetails(funinitCtx) {
		const funcName = funinitCtx.identifier().getText();
		const funcDetails = funinitCtx.funcDetails();
		const args = parseInt(funcDetails.NUMBER().getText(), 10);
		const parent = funcDetails.ID().getText();
		return { funcName, args, parent };
	}

	/**
     * Visita el nodo de una instrucción, creando una instrucción y agregándola a la función actual.
     * @param {Object} ctx - Contexto de la instrucción.
     */
	visitInstruction(ctx) {
		const mnemonic = ctx.mnemonico().getText();
		const line = ctx.start.line;
		let params = [];
		//const params = this._collectParams(ctx.argument());

		if (ctx.argument().length > 0) {
			params = this._collectParams(ctx.argument());
		} else if (ctx.type() !== null) {
			params = [ctx.type().getText()];
		}

		const instruction = new Instruction(mnemonic, params, line);
		mnemonic === 'INI' ? this.code.setInit(instruction) : this.currentFunction.instructions.push(instruction);
	}

	/**
     * Visita el nodo de un argumento, procesando el valor.
     * @param {Object} ctx - Contexto del argumento.
     * @returns {any} El valor procesado del argumento.
     */
	visitArgument(ctx) {
		if (ctx.list()) return this._visitList(ctx.list());
		
		const text = ctx.getText();
		return text.startsWith('"') && text.endsWith('"') 
		? (text.length > 2 ? text.slice(1, -1) : '')
		: isNaN(text) 
		? text 
		: Number(text);
	}

	 /**
     * Procesa una lista de argumentos.
     * @param {Object} ctx - Contexto de la lista.
     * @returns {Array} Arreglo de valores procesados de los argumentos.
     */
	_visitList(ctx) {
		return ctx.argument() ? ctx.argument().map(this.visitArgument.bind(this)) : [];
	}

	 /**
     * Colecta los parámetros de los argumentos dados.
     * @param {Array} argsCtx - Contexto de los argumentos.
     * @returns {Array} Arreglo de valores procesados de los argumentos.
     */
	_collectParams(argsCtx) {
		return argsCtx.map(this.visitArgument.bind(this));
	}
}

export default CodeVisitor;
