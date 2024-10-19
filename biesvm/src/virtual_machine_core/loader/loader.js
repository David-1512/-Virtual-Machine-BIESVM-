/**
 * @file loader.js
 * @description Clase Loader que maneja el proceso de parsing y la visita del árbol de sintaxis abstracta (AST) 
 * para generar el código correspondiente en la máquina virtual BiesVM.
 * @module LOADER
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

import antlr4 from 'antlr4';
import biesASMLexer from '../../../parser/grammar/biesASMLexer.js';
import biesASMParser from '../../../parser/grammar/biesASMParser.js';
import CodeVisitor from './code_visitor.js';


/**
 * Clase Loader que se encarga de cargar el contenido del archivo,
 * analizarlo y generar el código correspondiente utilizando un visitante.
 */
class Loader {

	 /**
     * Carga el contenido del archivo, lo analiza y genera el código correspondiente.
     * @param {string} fileContent - Contenido del archivo a procesar.
     * @param {WritableStream} outputStream - Flujo de salida para escribir los resultados.
     * @returns {Code} El código generado a partir del contenido del archivo.
     */
	load(fileContent,outputStream) {
		const lexer = new biesASMLexer(new antlr4.InputStream(fileContent));
		const tokens = new antlr4.CommonTokenStream(lexer); 
		const parser = new biesASMParser(tokens);
		parser.buildParseTrees = true;
		
		const tree = parser.program();
		const visitor = new CodeVisitor();
		const code = visitor.visit(tree);

		outputStream.write(`Código generado:\n ${code.toString()}\n`);
		return code;
	}
}

export default Loader;
