import biesCVisitor from "../../parser/grammar/biesCVisitor.js";
import Block from "../code/block.js";
import Instruccion from "../code/Instruccion.js";
import Code from "../code/code.js";
import BlockVisitor from "./block_visitor.js";


class CodeVisitor extends biesCVisitor {
    constructor() {
        super();
        this.code = new Code();
        this.blockMain = new Block(0,0,0);
    }

	visitProgram(ctx) {
        [...ctx.block(), ...ctx.instruction()].forEach(this.visit.bind(this));
        this.blockMain.addInstruccion('HLT');
        this.code.addBlock(this.blockMain);
        return this.code;
      }
  
  
    visitBlock(ctx) {
       let blockVisitor = new BlockVisitor(this.blockMain.getId()+1,this.blockMain.getId());
       let block = blockVisitor.visit(ctx);
       this.code.addBlock(block);
       const inst = new Instruccion('LDF',[this.blockMain.getId()+1]);
       this.blockMain.addInstruccion(inst);
       if (ctx.declaration_lambna()) { this.visit(ctx.declaration_lambna());} 
    }

    visitDeclaration_lambna(ctx) {this.visitDeclarateVariable(ctx.variable());}

    visitInstruction(ctx) {
        if (ctx.print()) { this.visit(ctx.print());} 
        if (ctx.call_variable()) { this.visit(ctx.call_variable());} 
      }
  
    visitDeclaration_expression(ctx) {
        
      }
  
    visitCondicional(ctx) {
        
    }
  
    visitPrint(ctx) {
        this.visit(ctx.expression());
        const inst = new Instruccion('PRN');
        this.blockMain.addInstruccion(inst);
      }
  
    visitCall_variable(ctx) {
        if (ctx.variable()) { this.visit(ctx.variable());} 
        const inst = new Instruccion('APP');
        this.blockMain.addInstruccion(inst);
    }

    visitExpression(ctx) {
        if (ctx.getChildCount() > 1){
            for (let i = 0; i < ctx.getChildCount(); i++) {
                this.visit(ctx.getChild(i));
            }
        }
        if(ctx.NUMBER()){
            const inst = new Instruccion('LDV',[parseInt(ctx.NUMBER().getText(),10)]);
            this.blockMain.addInstruccion(inst);
        }
        if (ctx.STRING()) {
            const inst = new Instruccion('LDV',[ctx.STRING().getText().slice(1, -1)]);
            this.blockMain.addInstruccion(inst);
        }
        if (ctx.BOOLEAN()) {
            const inst = new Instruccion('LDV',[ctx.BOOLEAN().getText() === "true"]);
            this.blockMain.addInstruccion(inst);
        }
        if (ctx.getText() === 'null') {
            const inst = new Instruccion('LDV',[null]);
            this.blockMain.addInstruccion(inst);
        }
        if (ctx.list()) {
            return this.visitList(ctx.list());
        }
        if (ctx.variable()) {
            this.visit(ctx.variable());
        }
      }


      visitDeclarateVariable(ctx) {
        this.blockMain.addVariable(ctx.getText());
        const inst = new Instruccion('BST',[this.blockMain.getId(),this.blockMain.getKeyByValue(ctx.getText())]);
        this.blockMain.addInstruccion(inst);
      }
  

      visitList(ctx) {
        return ctx.expression() ? ctx.expression().map(this.visitExpression.bind(this)) : [];
      }
  
      visitVariable(ctx) {
         this.blockMain.addVariable(ctx.getText());
        const inst = new Instruccion('BLD',[this.blockMain.getId(),this.blockMain.getKeyByValue(ctx.getText())]);
        this.blockMain.addInstruccion(inst);
      }
  
  
  
}

export default CodeVisitor;