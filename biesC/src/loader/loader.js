import antlr4 from 'antlr4';
import CodeVisitor from './code_visitor.js';
import biesCParser from '../../parser/grammar/biesCParser.js';
import biesCLexer from '../../parser/grammar/biesCLexer.js';
import BytecodeGenerator from './aritmetic.js';

class Loader {
    load(fileContent) {
        const lexer = new biesCLexer(new antlr4.InputStream(fileContent));
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new biesCParser(tokens);
        parser.buildParseTrees = true;

        const tree = parser.program();
        // printTree(tree, parser.ruleNames);

        const generator = new BytecodeGenerator();
        const bytecode = generator.generate(tree);

        console.log(bytecode.join('\n'));


        //const visitor = new CodeVisitor();
        //const code = visitor.visit(tree);
        //console.log(code.toString());
        //return code;
    }
}

function printTree(node, ruleNames, indent = 0) {
    // Obtenemos el nombre de la regla o el texto del token
    let nodeText = ruleNames[node.ruleIndex] || node.getText();

    console.log(" ".repeat(indent) + nodeText);

    // Recorre los hijos del nodo actual
    if (node.children) {
    for (let child of node.children) {
        printTree(child, ruleNames, indent + 2);
    }
    }
}

export default Loader;
