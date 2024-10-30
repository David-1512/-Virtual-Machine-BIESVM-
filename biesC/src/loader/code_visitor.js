import biesCVisitor from "../../parser/grammar/biesCVisitor.js";
import Code from "../code/code.js";
import Block from "../code/block.js";
import Instruccion from "../code/Instruccion.js";


class CodeVisitor extends biesCVisitor {
    constructor() {
        super();
        this.code = new Code();
        this.block = new Block(this.code.getCantBlocks());
    }

    visitProgram(ctx) {
        ctx.statement().forEach(this.visit.bind(this));
        this.block.addInstruccion('HLT');
        this.code.addBlock(this.block);
        return this.code;
    }

    visitStatement(ctx) {  
        if (ctx.print()) { this.visit(ctx.print());} 
        if(ctx.declaration()){ this.visit(ctx.declaration());}
    }

    visitPrint(ctx) {
        this.visit(ctx.expression());
        const inst = new Instruccion('PRN');
        this.block.addInstruccion(inst);
    }
  
    visitDeclaration(ctx) {
        const valor = this.visit(ctx.expression());
        this.block.addVariable(valor);
        const inst = new Instruccion(BLD,[this.block.getId,this.block.getKeyByValue(value)]);
        this.block.addInstruccion(inst);
    }

    visitExpression(ctx) {
        if (ctx.getChildCount() > 1){
            for (let i = 0; i < ctx.getChildCount(); i++) {
                this.visit(ctx.getChild(i));
            }
        }
        if(ctx.NUMBER()){
            const inst = new Instruccion('LDV',[parseInt(ctx.NUMBER().getText(),10)]);
            this.block.addInstruccion(inst);
            return parseInt(ctx.NUMBER().getText(),10);
        }
        if (ctx.STRING()) {
            const inst = new Instruccion('LDV',[ctx.STRING().getText().slice(1, -1)]);
            this.block.addInstruccion(inst);
        }
        if (ctx.BOOLEAN()) {
            const inst = new Instruccion('LDV',[ctx.BOOLEAN().getText() === "true"]);
            this.block.addInstruccion(inst);
        }
        if (ctx.getText() === 'null') {
            const inst = new Instruccion('LDV',[null]);
            this.block.addInstruccion(inst);
        }
        if (ctx.lambda()) {
            this.visit(ctx.statement());
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