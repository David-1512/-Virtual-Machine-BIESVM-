import biesCVisitor from "../../parser/grammar/biesCVisitor.js";
import Code from "../code/code.js";
import Block from "../code/block.js";
import Instruccion from "../code/Instruccion.js";


class CodeVisitor extends biesCVisitor {
    constructor() {
        super();
        this.contBlocks = 0;
        this.contVariables = 0;
        this.code = new Code();
        this.block = null;
    }

    visitProgram(ctx) {
        ctx.statement().forEach(this.visit.bind(this));
        return this.code;
    }

    visitStatement(ctx) {  
        this.block = new Block('$'+this.contBlocks);
        if (ctx.getText().startsWith('print')) {
            this.visit(ctx.expression());
            const inst = new Instruccion('PRN');
            this.block.addInstruccion(inst);
        }
        this.contBlocks++;
        this.contVariables = 0;
        this.code.addBlock(this.block);
    }

    visitDeclaration(ctx) {
    }

    visitExpression(ctx) {
        if (ctx.getChildCount() > 1){
            for (let i = 0; i < ctx.getChildCount(); i++) {
                this.visit(ctx.getChild(i));
            }
        }
        if(ctx.NUMBER()){
            const inst = new Instruccion('LDV',parseInt(ctx.NUMBER().getText(),10));
            this.block.addInstruccion(inst);
        }
        if (ctx.STRING()) {
            const inst = new Instruccion('LDV',ctx.STRING().getText().slice(1, -1));
            this.block.addInstruccion(inst);
        }
        if (ctx.BOOLEAN()) {
            const inst = new Instruccion('LDV',ctx.BOOLEAN().getText() === "true");
            this.block.addInstruccion(inst);
        }
        if (ctx.getText() === 'null') {
            const inst = new Instruccion('LDV',null);
            this.block.addInstruccion(inst);
        }
        if (ctx.lambda()) {

            return this.visit(ctx.lambda());
        }
        if (ctx.list()) {
            return this.visitList(ctx.list());
        }
        if (ctx.variable()) {
            return  this.code.getValorAsigment(ctx.variable().getText());
        }
    }

    visitList(ctx) {
        return ctx.expression() ? ctx.expression().map(this.visitExpression.bind(this)) : [];
    }

    visitBlock(ctx) {
    }

    visitFun(ctx) {
    }
}

export default CodeVisitor;