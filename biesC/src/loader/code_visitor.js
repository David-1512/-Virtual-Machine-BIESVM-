import biesCVisitor from "../../parser/grammar/biesCVisitor.js";
import Code from "../code/code.js";

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
        if(ctx.declaration()){
            return this.visit(ctx.declaration());
        }
    }

    visitDeclaration(ctx) {
        const variable = ctx.variable().getText();
        const expression = this.visit(ctx.expression());
        console.log(expression);
        return this.code.addAsigments(variable,expression);
    }

    visitExpression(ctx) {
        if(ctx.NUMBER()){
            return parseInt(ctx.NUMBER().getText(),10);
        }
        if (ctx.STRING()) {
            return ctx.STRING().getText().slice(1, -1); 
        }
        if (ctx.BOOLEAN()) {
            return ctx.BOOLEAN().getText() === "true";
        }
        if (ctx.getText() === 'null') {
            return null;
        }
        if (ctx.lambda()) {
            return this.visit(ctx.lambda());
        }
        if (ctx.list()) {
            return this.visitList(ctx.list());
        }
        if (ctx.variable()) {
            return this.visit(ctx.variable());
        }
    }

    visitList(ctx) {
        return ctx.expression() ? ctx.expression().map(this.visitExpression.bind(this)) : [];
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