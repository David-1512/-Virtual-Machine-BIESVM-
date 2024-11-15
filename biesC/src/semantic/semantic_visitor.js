import SymbolTable from './symbol_table.js';
import biesCVisitor from "../../parser/grammar/biesCVisitor.js";

class SemanticVisitor extends biesCVisitor {
    constructor(){
        super();
        this.symbolTable = new SymbolTable();
        this.errors = [];
    }
    
    getErrors(){
        return this.errors;
    }

    getSymbolTable(){
        return this.symbolTable;
    }

    // Programa principal
    visitProgram(ctx) {        
        this.visitChildren(ctx);        
    }

    // Declaración de constantes
    visitConstDeclaration(ctx) {
        const name = ctx.ID().getText();
        const line = ctx.start.line;
        try {
            this.symbolTable.addVariable(name, "const", null, line);
        } catch (error) {
            this.errors.push(`Error en la línea ${line}: ${error.message}`);
        }
        return this.visitChildren(ctx);
    }

    // Declaración de constantes
    visitConstDeclaration(ctx) {
        const name = ctx.ID().getText();
        const line = ctx.start.line;
        try {
            this.symbolTable.addVariable(name, "const", null, line);
        } catch (error) {
            this.errors.push(`Error en la línea ${line}: ${error.message}`);
        }
        return this.visitChildren(ctx);
    }

    // Declaración de variables
    visitVarDeclaration(ctx) {
        const name = ctx.ID().getText();
        const line = ctx.start.line;
        try {
            this.symbolTable.addVariable(name, "var", null, line);
        } catch (error) {
            this.errors.push(`Error en la línea ${line}: ${error.message}`);
        }
        return this.visitChildren(ctx);
    }

    // Acceso a variables
    visitLiteral(ctx) {
        const name = ctx.ID() ? ctx.ID().getText() : null;
        if (name) {
            try {
                this.symbolTable.getVariable(name); // Verifica si la variable está definida
            } catch (error) {
                const line = ctx.start.line;
                this.errors.push(`Error en la línea ${line}: ${error.message}`);
            }
        }
        return this.visitChildren(ctx);
    }

    // Declaración de funciones
    visitFunDeclaration(ctx) {
        const name = ctx.ID().getText();
        const line = ctx.start.line;
        try {
            this.symbolTable.addScope(name, line); // Crea un nuevo alcance para la función
            this.visitChildren(ctx); // Visita los nodos hijos dentro de este alcance
            this.symbolTable.exitScope(); // Sale del alcance de la función
        } catch (error) {
            this.errors.push(`Error en la línea ${line}: ${error.message}`);
        }
    }
    
    // Declaración de lambdas
    visitLambda(ctx) {
        const line = ctx.start.line;
        this.symbolTable.addScope(null, line); // Crea un nuevo alcance para la función        
        this.visitChildren(ctx);
        this.symbolTable.exitScope();

    }
}

export default SemanticVisitor;
