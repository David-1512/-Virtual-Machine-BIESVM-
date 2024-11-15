import antlr4 from 'antlr4';
import biesCParser from '../../parser/grammar/biesCParser.js';
import biesCLexer from '../../parser/grammar/biesCLexer.js';
import ASTCode from '../ast/ast_code.js';

class SemanticAnalyzer {
    load(fileContent) {
        const lexer = new biesCLexer(new antlr4.InputStream(fileContent));
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new biesCParser(tokens);
        parser.buildParseTrees = true;

       const tree = parser.program();
       const astCode = new ASTCode(0,0,0);
       const code = astCode.visit(tree);
       console.log(code.toString());
       return code;
    }
}

export default SemanticAnalyzer;
