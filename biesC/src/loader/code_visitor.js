import biesCVisitor from "../../parser/grammar/biesCVisitor.js";
import Code from "../code/code.js";
import Statement from "../code/statement.js";
import Expression from "../code/expression.js";
import Block from "../code/block.js";
import Function from "../code/function.js";
import Variable from "../code/variable.js";
import Condition from "../code/condition.js";

class CodeVisitor extends biesCVisitor {
    constructor() {
        super();
        this.code = new Code();
    }

    visitProgram(ctx) {
        ctx.statement().forEach(this.visit.bind(this));
        return this.code;
    }

    visitStatement(ctx) {
        if (ctx.getText().startsWith('print')) {
            console.log(ctx.getChildCount());
            const expr = this.visit(ctx.expression());
            const printStmt = new Statement('print', expr);
            this.code.addStatement(printStmt);
        } 
    }

    visitDeclaration(ctx) {
    }

    // Visita una expresión
    visitExpression(ctx) {

        return new Expression(ctx.STRING().getText());
    }

    // Visita una variable
    visitVariable(ctx) {
    }

    // Visita un bloque de código
    visitBlock(ctx) {
    }

    // Visita una función
    visitFun(ctx) {
    }
}

export default CodeVisitor;
