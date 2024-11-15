import biesCVisitor from "../../parser/grammar/biesCVisitor.js";
import biesCLexer from "../../parser/grammar/biesCLexer.js";
import Block from "../code/block.js";
import Instruccion from "../code/Instruccion.js";
import SymbolTable from "../semantic/symbol_table.js";


class ASTCode extends biesCVisitor{

   constructor(id,argument,parent){
      super();
      this.block = new Block(SymbolTable.getCurrentScopeId(),argument,parent);
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
  
  visitEqualityExpression(ctx) { 
    if (ctx.getChildCount() > 1){
      this.visit(ctx.getChild(0));
      for (let i = 1; i < ctx.getChildCount(); i++) { 
        this.visit(ctx.getChild(i));
        const operator = ctx.getChild(i-1).getText();
        this.block.addInstruccion(new Instruccion('EQ'));
        if (operator === '!=') {this.block.addInstruccion(new Instruccion('NEG'));} 
      }
  }
  else{  this.visit(ctx.relationalExpression());}
  }
 
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
 
  visitMultiplicativeExpression(ctx) {
    if (ctx.getChildCount() > 1){
      this.visit(ctx.getChild(0));
      for (let i = 1; i < ctx.getChildCount(); i++) { 
        this.visit(ctx.getChild(i));
        const operator = ctx.getChild(i-1).getText();
        if (operator === '*') {this.block.addInstruccion(new Instruccion('MUL'));}
        if (operator === '/') {this.block.addInstruccion(new Instruccion('DIV'));}
      }
  }
  else{ this.visit(ctx.exponentialExpression());}
  }
  
  visitExponentialExpression(ctx) {this.visit(ctx.unaryExpression());}
  
  visitUnaryExpression(ctx) {this.visit(ctx.primaryExpression());}
  
  visitPrimaryExpression(ctx) { 
    if  (ctx.builtinFunction()) {this.visit(ctx.builtinFunction());}
    if  (ctx.literal()) {this.visit(ctx.literal());}
    if (ctx.lambda()) {this.visit(ctx.lambda());}
    if (ctx.expression()) {this.visit(ctx.expression());}
    if (ctx.functionCallChain()) {this.visit(ctx.functionCallChain());}
    if (ctx.ifExpression()) {this.visit(ctx.ifExpression());}
  }

  visitIfExpression(ctx){
    this.visit(ctx.expression());

  }
 
  visitFunctionCallChain(ctx){
    let args = 0;
    if (ctx.argumentList()) {
      this.visit(ctx.argumentList());
      args = ctx.argumentList().length;
    }
    //Aqui en el diccionario //
    let params = SymbolTable.getEnvAndLocal(ctx.ID().getText());
    this.block.addInstruccion(new Instruccion('BLD', params));
    this.block.addInstruccion(new Instruccion('APP', args != 0 ? [args] : []));
  }

  visitArgumentList(ctx){
    this.visit(ctx.expression());
  }


  visitBuiltinFunction(ctx) { 
    this.visit(ctx.expression());
    if(ctx.PRINT()){this.block.addInstruccion(new Instruccion('PRN'));} 
    if(ctx.INPUT()){this.block.addInstruccion(new Instruccion('INP'));} 
    if(ctx.LEN()){this.block.addInstruccion(new Instruccion('LEN'));}  //Hay que hecharle cabeza
  }

  visitLiteral(ctx){
    if (ctx.STRING()) {this.block.addInstruccion(new Instruccion('LDV',[ctx.STRING().getText().slice(1, -1)])); }

    if(ctx.ID()){
      //Buscar en el diccionario / Si no error //
      let params = SymbolTable.getEnvAndLocal(ctx.ID().getText());
      this.block.addInstruccion(new Instruccion('BLD', params));
    }

    if(ctx.NUMBER()){this.block.addInstruccion(new Instruccion('LDV',[parseInt(ctx.NUMBER().getText(),10)]));}
  }

  //Declaration
  visitDeclaration(ctx){
    if  (ctx.letDeclaration()) {this.visit(ctx.letDeclaration());}
  }

  visitConstDeclaration(ctx){  //Ver como quitar esta repeticion
    this.visit(ctx.expression());
    //Diccionario
    let params = SymbolTable.addVariable(ctx.ID().getText(), "const", null, ctx.start.line);
    this.block.addInstruccion(new Instruccion('BST', params));
  }

  visitLetDeclaration(ctx) {
    this.visit(ctx.expression());
    //Diccionario
    let params = SymbolTable.addVariable(ctx.ID().getText(), "let", null, ctx.start.line);
    this.block.addInstruccion(new Instruccion('BST', params));
  }

  //Lambda
  visitLambda(ctx){
    SymbolTable.addScope("");
    if  (ctx.letInDeclaration()) { this.visit(ctx.letInDeclaration());}
    else{

    //=============================================================================================
    for (let i = 0; i < ctx.params().getChildCount(); i++) {
      const paramNode = ctx.params().getChild(i);

      if (paramNode.symbol && paramNode.symbol.type === biesCLexer.ID) {
          SymbolTable.addVariable(paramNode.getText(), "param", null, ctx.start.line);
      }
    }    
    //==============================================================================================
    
    let lambda = new ASTLambda(this.block.getCantBlocks()+1,ctx.params().getChildCount()-2,this.block.getId());
    this.block.addBlock(lambda.visitL(ctx));
    this.block.addInstruccion(new Instruccion('LDF', [`$${SymbolTable.getCurrentScopeId()}`]));
    }  
    SymbolTable.exitScope();
  }

  visitLetInDeclaration(ctx){    
    let letIn = new ASTLetIn(this.block.getCantBlocks()+1,0,this.block.getId());
    this.block.addBlock(letIn.visitLI(ctx));
    this.block.addInstruccion(new Instruccion('LDF', [`$${SymbolTable.getCurrentScopeId()}`]));
    this.block.addInstruccion(new Instruccion('APP'));    
  }

  visitBlockExpression(ctx){
    if (ctx.expression()) {this.visit(ctx.expression());}
    if (ctx.statement()) {this.visit(ctx.statement());}
  }

  visitBlockDeclaration(ctx){
    for (let i = 1; i < ctx.getChildCount()-1; i++) { 
      this.visit(ctx.getChild(i));
    }
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

class ASTLetIn extends ASTCode {
  constructor(id, argument, parent) {
     super(id, argument, parent);
  }

  visitLI(ctx) {
      this.visit(ctx.blockDeclaration());
      this.visit(ctx.blockExpression());
      return this.block;
  }
}

export default ASTCode;
export { ASTLambda,ASTLetIn };
