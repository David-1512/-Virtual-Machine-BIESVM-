import biesCVisitor from "../../parser/grammar/biesCVisitor.js";
import Block from "../code/block.js";
import Instruccion from "../code/Instruccion.js";

class BlockVisitor extends biesCVisitor {
    constructor(id,parent) {
        super();
        this.block = new Block(id,parent,0);
    }

    visitBlock(ctx) {
        if (ctx.declaration_lambna()) { this.visit(ctx.declaration_lambna());} 
        return this.block; 
        
    }
    
    visitDeclaration_lambna(ctx) {
        this.visit(ctx.lambda());
    }

    visitLambda(ctx) {
        if (ctx.print()) { this.visit(ctx.print());}   
    }

 
    visitInstruction(ctx) {
        if (ctx.print()) { this.visit(ctx.print());} 
      }
  
    visitDeclaration_expression(ctx) {
        
      }
  
    visitCondicional(ctx) {
        
    }
  
    visitPrint(ctx) {
        this.visit(ctx.expression());
        const inst = new Instruccion('PRN');
        this.block.addInstruccion(inst);
      }
  
    visitCall_variable(ctx) {
        
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
        if (ctx.list()) {
            return this.visitList(ctx.list());
        }
      }
  
      visitList(ctx) {
        return ctx.expression() ? ctx.expression().map(this.visitExpression.bind(this)) : [];
      }
  
      visitVariable(ctx) {
       
      }
  
}


export default BlockVisitor;