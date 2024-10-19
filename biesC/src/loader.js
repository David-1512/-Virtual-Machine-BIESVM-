import antlr4 from 'antlr4';
import biesCVisitor from '../parser/grammar/biesCVisitor.js';
import biesCLexer from '../parser/grammar/BiesCLexer.js';
import biesCParser from '../parser/grammar/biesCParser.js';

class Loader {
    constructor(input) {
        this.input = input;
    }

    parse() {
        const chars = new antlr4.InputStream(this.input); // Toma el input para procesarlo
        const lexer = new biesCLexer.BiesCLexer(chars); // Usa el lexer para tokenizar el input
        const tokens = new antlr4.CommonTokenStream(lexer); // Pasa los tokens al parser
        const parser = new biesCParser.BiesCParser(tokens); // Crea una instancia del parser
        parser.buildParseTrees = true; // Asegura que el parser genere el árbol de análisis
        const tree = parser.program(); // Comienza a analizar desde la regla `program`

        // Si quieres usar un visitor:
        const visitor = new biesCVisitor.BiesCVisitor(); 
        const code = visitor.visit(tree);
        return code; // Visita el árbol generado y devuelve el resultado
    }
}

export default Loader;