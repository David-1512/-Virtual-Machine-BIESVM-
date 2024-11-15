class variable{
    constructor(name, type, value, line){
        this.name = name;
        this.id = 0;
        this.type = type;
        this.value = value;
        this.line = line;
    }
}

class Scope {
    constructor(parent = null, id = 0, funName = "main"){
        this.funName = funName;
        this.id = id;
        this.parent = parent;        
        this.variables = {};
        this.children = [];        
    }

    addVariable(name, type, value, line){
        if (name in this.variables) {
            throw new Error(`Variable '${name}' ya está definida en este alcance.`);
        }       
        this.variables[name] = new variable(name, type, value, line);
        this.variables[name].id = Object.keys(this.variables).length;
        
        return [ 0, this.variables[name].id ];        
    }

    getEnvAndLocal(name, env = 0){
        if (this.variables[name] !== undefined){
            return [env, this.variables[name].id];
        } else if (this.parent){
            return this.parent.getEnvAndLocal(name, env + 1);
        }else{
            throw new Error(`Variable '${name}' no está definida en este alcance.`);
        }
    }

    getVariable(name){
        if (this.variables[name] !== undefined){
            return this.variables[name];
        } else if (this.parent){
            return this.parent.getVariable(name);
        }
        return null;
    }
    
    addChild(child){
        this.children.push(child);
    }

    getChildren(){
        return this.children;
    }

    getParent(){
        return this.parent;
    }

    getVariables(){
        return this.variables;
    }

    getId(){
        return this.id;
    }    
}

class SymbolTable{
    constructor(){
        this.globalScope = new Scope(null, 0); // Alcance global con ID 0
        this.currentScope = this.globalScope;
        this.nextScopeId = 1; // ID para nuevos alcances
    }

    addVariable(name, type, value, line){
        return this.currentScope.addVariable(name, type, value, line);
    }

    getVariable(name){
        return this.currentScope.getVariable(name);
    }

    getEnvAndLocal(name){
        return this.currentScope.getEnvAndLocal(name);
    }

    addScope(funName){
        let newScope = new Scope(this.currentScope, this.nextScopeId, funName);
        this.currentScope.addChild(newScope);
        this.currentScope = newScope;
        this.nextScopeId++;
    }   

    getScopeIdbyName(funName){
        let scope = this.globalScope;
        while(scope){
            if(scope.funName === funName){
                return scope.id;
            }
            scope = scope.children[0];
        }
        throw new Error(`Función '${funName}' no está definida.`);
    }

    setScope(scope){
        this.currentScope = scope;
    }

    getCurrentScope(){
        return this.currentScope;
    }

    getGlobalScope(){
        return this.globalScope;
    }

    exitScope() {
        if (this.currentScope.parent) {
            this.currentScope = this.currentScope.parent;
        } else {
            throw new Error("No se puede salir del alcance global.");
        }
    }

}

export default SymbolTable;

