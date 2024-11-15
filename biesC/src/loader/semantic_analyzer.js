import antlr4 from 'antlr4';
import biesCParser from '../../parser/grammar/biesCParser.js';
import biesCLexer from '../../parser/grammar/biesCLexer.js';
import ASTCode from '../ast/ast_code.js';
import SemanticVisitor from '../semantic/semantic_visitor.js';

class SemanticAnalyzer {
    load(fileContent) {
        const lexer = new biesCLexer(new antlr4.InputStream(fileContent));
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new biesCParser(tokens);
        parser.buildParseTrees = true;

        const tree = parser.program();

        // const semanticVisitor = new SemanticVisitor();
        // semanticVisitor.visit(tree);
        // const symbolTable = semanticVisitor.getSymbolTable();
        // const errors = semanticVisitor.getErrors();
        // if (errors.length > 0) {
        //     for (let i = 0; i < errors.length; i++) {
        //         console.error(errors[i]);
        //     }
        // }

        // console.log(symbolTable);

        const astCode = new ASTCode(0,0,0);
        const code = astCode.visit(tree);
        console.log(code.toString());
        return code;
    }
}

export default SemanticAnalyzer;
