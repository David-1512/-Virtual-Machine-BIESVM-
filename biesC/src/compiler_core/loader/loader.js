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
    /**
     * Crea una nueva instancia de `ErrorListener`.
     */
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
     * Método opcional para manejar errores de ambigüedad durante el análisis.
     * 
     * @param {object} recognizer - El objeto reconocedor que se está utilizando para el análisis.
     * @param {object} dfa - El autómata de decisión determinista que detectó la ambigüedad.
     * @param {number} startIndex - El índice inicial del texto en conflicto.
     * @param {number} stopIndex - El índice final del texto en conflicto.
     * @param {boolean} exact - Si se ha producido una ambigüedad exacta.
     * @param {Array} ambigAlts - Las alternativas ambiguas que causaron el conflicto.
     * @param {Array} configs - Las configuraciones de análisis asociadas.
     */
	reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
        // Optionally handle ambiguity errors
        // Mantener aunque no se usen para que los reconoszca
    }

    /**
     * Método opcional para manejar intentos de contexto completo durante el análisis.
     * 
     * @param {object} recognizer - El objeto reconocedor que se está utilizando para el análisis.
     * @param {object} dfa - El autómata de decisión determinista que detectó el intento de contexto completo.
     * @param {number} startIndex - El índice inicial del texto en conflicto.
     * @param {number} stopIndex - El índice final del texto en conflicto.
     * @param {Array} conflictingAlts - Las alternativas que causaron el conflicto.
     * @param {Array} configs - Las configuraciones de análisis asociadas.
     */
    reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
        // Optionally handle attempting full context
        // Mantener aunque no se usen para que los reconoszca
    }

    /**
     * Método opcional para manejar problemas de sensibilidad al contexto durante el análisis.
     * 
     * @param {object} recognizer - El objeto reconocedor que se está utilizando para el análisis.
     * @param {object} dfa - El autómata de decisión determinista que detectó el problema de sensibilidad.
     * @param {number} startIndex - El índice inicial del texto en conflicto.
     * @param {number} stopIndex - El índice final del texto en conflicto.
     * @param {number} prediction - La predicción de análisis que causó el problema de sensibilidad al contexto.
     * @param {Array} configs - Las configuraciones de análisis asociadas.
     */
    reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
        // Optionally handle context sensitivity
        // Mantener aunque no se usen para que los reconoszca
    }
}


/**
 * Clase encargada de cargar y analizar el código fuente para generar el Árbol de Sintaxis Abstracta (AST).
 * 
 * @class Loader
 * @description Esta clase se encarga de realizar el análisis léxico y sintáctico de un archivo fuente y generar el AST correspondiente. Además, maneja los errores de parseo.
 */
class Loader {
    /**
     * Método que carga y analiza el contenido de un archivo fuente.
     * 
     * @param {string} fileContent - El contenido del archivo fuente que se desea analizar.
     * @param {number} trace - Indicador para imprimir el AST en consola. Si es 1, se imprime, si es 0, no se imprime.
     * @returns {ASTCode} El Árbol de Sintaxis Abstracta (AST) generado a partir del contenido del archivo fuente.
     * @throws {Error} Lanza un error si hay problemas durante el análisis léxico o sintáctico.
     * @example
     * const loader = new Loader();
     * const ast = loader.load('codigoFuente();', 1);
     * console.log(ast);
     */
	load(fileContent, trace) {
        // Crear el lexer para tokenizar el contenido
		const lexer = new biesCLexer(new antlr4.InputStream(fileContent));

         // Crear el listener de errores para el lexer
		const lexerErrorListener = new ErrorListener();
        lexer.removeErrorListeners();
        lexer.addErrorListener(lexerErrorListener);

         // Tokenizar el contenido del archivo
		const tokens = new antlr4.CommonTokenStream(lexer);

        // Crear el parser para analizar los tokens
		const parser = new biesCParser(tokens);

        // Crear el listener de errores para el parser
		const parserErrorListener = new ErrorListener();
        parser.removeErrorListeners();
        parser.addErrorListener(parserErrorListener);

        // Analizar el contenido y construir el árbol de sintaxis
		parser.buildParseTrees = true;
		const tree = parser.program();

        // Comprobar si se encontraron errores y agregarlos al control de errores
		const errors = [...lexerErrorListener.errors, ...parserErrorListener.errors];
        if (errors.length > 0) {
			Errors.addError(`Errores de parseo:\n${errors.join('\n')}`);            
        }

        // Crear el AST a partir del árbol de sintaxis
		const astCode = new ASTCode(0);
		const code = astCode.visit(tree);	
    
        // Si trace es 1, imprimir el AST en la consola	
		if(trace == 1){			
			console.log(code.toString());
		}	
        
		return code;
	}
}

export default Loader;
