/**
 * @file loader.js
 * @description Este archivo define la clase Loader, que se encarga de analizar y generar el Árbol de Sintaxis Abstracta (AST) a partir del contenido de un archivo fuente en el lenguaje BiesC.
 * También gestiona errores léxicos y de parseo utilizando la gramática de ANTLR.
 * 
 * @module Loader
 * 
 * @project biesC
 * Proyecto académico para implementar un compilador para un lenguaje funcional basado en pila (BiesVM).
 * 
 * @class Loader
 * @classdesc Clase para manejar el análisis léxico, sintáctico y la generación del AST a partir del código fuente.
 * 
 * @author David Serrano Medrano
 * @author Leandro Mora Corrales
 * @author Xiara Suarez Alpizar
 * 
 * @version 1.0.0
 * @since 17-11-2024
 */

import antlr4 from 'antlr4';
import biesCParser from '../../../parser/grammar/biesCParser.js';
import biesCLexer from '../../../parser/grammar/biesCLexer.js';
import ASTCode from '../code_generator/ast_code.js';
import {Errors} from '../semantic/control.js';

/**
 * Clase que implementa un listener para capturar y registrar errores de análisis.
 * 
 * @class ErrorListener
 */
class ErrorListener {
    constructor() {
        /**
         * @property {Array<string>} errors - Lista de errores detectados durante el análisis.
         */
        this.errors = [];
    }

    /**
     * Captura un error de sintaxis.
     * @param {object} recognizer - Reconocedor utilizado en el análisis.
     * @param {object} offendingSymbol - Símbolo que causó el error.
     * @param {number} line - Línea donde ocurrió el error.
     * @param {number} column - Columna donde ocurrió el error.
     * @param {string} msg - Mensaje de error.
     * @param {object} e - Excepción asociada al error.
     */
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errors.push(`Line ${line}:${column} ${msg}`);
    }

    /**
     * Método opcional para manejar ambigüedades.
     */
	reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
        // Optionally handle ambiguity errors
    }

    reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
        // Optionally handle attempting full context
    }

    reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
        // Optionally handle context sensitivity
    }
}



class Loader {
	load(fileContent, trace) {
		const lexer = new biesCLexer(new antlr4.InputStream(fileContent));

		const lexerErrorListener = new ErrorListener();
        lexer.removeErrorListeners();
        lexer.addErrorListener(lexerErrorListener);

		const tokens = new antlr4.CommonTokenStream(lexer);
		const parser = new biesCParser(tokens);

		const parserErrorListener = new ErrorListener();
        parser.removeErrorListeners();
        parser.addErrorListener(parserErrorListener);

		parser.buildParseTrees = true;
		const tree = parser.program();

		const errors = [...lexerErrorListener.errors, ...parserErrorListener.errors];
        if (errors.length > 0) {
			Errors.addError(`Errores de parseo:\n${errors.join('\n')}`);            
        }

		const astCode = new ASTCode(0);
		const code = astCode.visit(tree);	
		if(trace == 1){			
			console.log(code.toString());
		}	
        console.log(code.toString());
		return code;
	}
}

export default Loader;
