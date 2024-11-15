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
    this.block.addInstruccion(new Instruccion('HLT'));
    return this.block;
  }


  visitStatement(ctx){
    if (ctx.expression()) { this.visit(ctx.expression());} 
    if (ctx.declaration()) { this.visit(ctx.declaration());} 
  }

  //Expression
  
  visitExpression(ctx) { this.visit(ctx.logicalOrExpression());} 
  
  visitLogicalOrExpression(ctx) { this.visit(ctx.logicalAndExpression());}
  
  visitLogicalAndExpression(ctx) { this.visit(ctx.equalityExpression());}
  
  visitEqualityExpression(ctx) { this.visit(ctx.relationalExpression());}
 
  visitRelationalExpression(ctx) {this.visit(ctx.additiveExpression());}

  visitAdditiveExpression(ctx) { 
    if (ctx.getChildCount() > 1){
        this.visit(ctx.getChild(0));
        for (let i = 1; i < ctx.getChildCount(); i++) { 
          this.visit(ctx.getChild(i));
          const operator = ctx.getChild(i-1).getText();
          if (operator === '+') {this.block.addInstruccion(new Instruccion('ADD'));}
          if (operator === '-') {this.block.addInstruccion(new Instruccion('SUB'));}
        }
    }
    else{this.visit(ctx.multiplicativeExpression());}
  }
 
  visitMultiplicativeExpression(ctx) {this.visit(ctx.exponentialExpression());}
  
  visitExponentialExpression(ctx) {this.visit(ctx.unaryExpression());}
  
  visitUnaryExpression(ctx) {this.visit(ctx.primaryExpression());}
  
  visitPrimaryExpression(ctx) { 
    if  (ctx.builtinFunction()) {this.visit(ctx.builtinFunction());}
    if  (ctx.literal()) {this.visit(ctx.literal());}
    if (ctx.lambda()) {this.visit(ctx.lambda());}
    if (ctx.expression()) {this.visit(ctx.expression());}
  }
 
  visitBuiltinFunction(ctx) { 
    this.visit(ctx.expression());
    if(ctx.PRINT()){this.block.addInstruccion(new Instruccion('PRN'));} 
  }

  visitLiteral(ctx){
    if (ctx.STRING()) {this.block.addInstruccion(new Instruccion('LDV',[ctx.STRING().getText().slice(1, -1)])); }

    if(ctx.ID()){
      //Buscar en el diccionario / Si no error
      this.block.addInstruccion(new Instruccion('BLD'));
    }

    if(ctx.NUMBER()){this.block.addInstruccion(new Instruccion('LDV',[parseInt(ctx.NUMBER().getText(),10)]));}
  }

  //Declaration
  visitDeclaration(ctx){
    if  (ctx.letDeclaration()) {this.visit(ctx.letDeclaration());}
  }

  visitLetDeclaration(ctx){
    this.visit(ctx.expression());
    //Diccionario
    this.block.addInstruccion(new Instruccion('BST'));
  }

  //Lambda
  visitLambda(ctx){
    let lambda = new ASTLambda(this.block.getId()+1,ctx.params().getChildCount()-2,this.block.getId());
    this.block.addBlock(lambda.visitL(ctx));
    this.block.addInstruccion(new Instruccion('LDF', [`$${this.block.getId()+1}`]));
  }

  visitBlockExpression(ctx){
    if (ctx.expression()) {this.visit(ctx.expression());}
  }

}

class ASTLambda extends ASTCode {
  constructor(id, argument, parent) {
     super(id, argument, parent);
  }

  visitL(ctx) {
      this.visit(ctx.blockExpression()); 
      return this.block;
  }
}

export default ASTCode;
export { ASTLambda };
