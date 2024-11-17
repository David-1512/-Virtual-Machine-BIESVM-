import antlr4 from 'antlr4';
import biesCParser from '../../../parser/grammar/biesCParser.js';
import biesCLexer from '../../../parser/grammar/biesCLexer.js';
import ASTCode from '../code_generator/ast_code.js';
import {Errors} from '../semantic/control.js';

class ErrorListener {
    constructor() {
        this.errors = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errors.push(`Line ${line}:${column} ${msg}`);
    }

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

		return code;
	}
}

export default Loader;
