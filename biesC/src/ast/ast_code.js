import biesCVisitor from "../../parser/grammar/biesCVisitor.js";
import Block from "../code/block.js";
import Instruccion from "../code/Instruccion.js";

class ASTCode extends biesCVisitor{

   constructor(id,argument,parent){
      super();
      this.block = new Block(id,argument,parent);
   }

   visitProgram(ctx) {
    ctx.statement().forEach(this.visit.bind(this));
    const inst = new Instruccion('HLT');
    this.block.addInstruccion(inst);
    return this.block;
  }


  visitStatement(ctx){
    if (ctx.expression()) { this.visit(ctx.expression());} 
    if (ctx.declaration()) { this.visit(ctx.declaration());} 
  }
  
  visitExpression(ctx) { this.visit(ctx.logicalOrExpression());} 
  
  visitLogicalOrExpression(ctx) { this.visit(ctx.logicalAndExpression());}
  
  visitLogicalAndExpression(ctx) { this.visit(ctx.equalityExpression());}
  
  visitEqualityExpression(ctx) { this.visit(ctx.relationalExpression());}
 
  visitRelationalExpression(ctx) { this.visit(ctx.additiveExpression());}
  
  visitAdditiveExpression(ctx) { this.visit(ctx.multiplicativeExpression()); }
 
  visitMultiplicativeExpression(ctx) {this.visit(ctx.exponentialExpression());}
  
  visitExponentialExpression(ctx) {this.visit(ctx.unaryExpression());}
  
  visitUnaryExpression(ctx) {this.visit(ctx.primaryExpression());}
  
  visitPrimaryExpression(ctx) { 
    if  (ctx.builtinFunction()) {this.visit(ctx.builtinFunction());}
    if  (ctx.literal()) {this.visit(ctx.literal());}
  }
 
  visitBuiltinFunction(ctx) { 
    this.visit(ctx.expression());
    if(ctx.PRINT()){
      this.block.addInstruccion(new Instruccion('PRN'));
    } 
  }

  visitLiteral(ctx){
    if (ctx.STRING()) {
      const inst = new Instruccion('LDV',[ctx.STRING().getText().slice(1, -1)]);
      this.block.addInstruccion(inst);
    }
  }
}

export default ASTCode;