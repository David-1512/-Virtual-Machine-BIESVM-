import antlr4 from 'antlr4';
import CodeVisitor from './code_visitor.js';
import biesCParser from '../../parser/grammar/biesCParser.js';
import biesCLexer from '../../parser/grammar/biesCLexer.js';

class Loader {
    load(fileContent) {
        const lexer = new biesCLexer(new antlr4.InputStream(fileContent));
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new biesCParser(tokens);
        parser.buildParseTrees = true;

        const tree = parser.program();
        const visitor = new CodeVisitor();
        const code = visitor.visit(tree);
        console.log(code.toString());
        return code;
    }
}

export default Loader;
