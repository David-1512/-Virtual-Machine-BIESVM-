class Variable {
    constructor(name, type, value, line) {
        this.name = name;
        this.id = -1;  // id se asignará en el scope
        this.type = type;
        this.value = value;
        this.line = line;
    }
}

class Scope {
    static instances = [];

    constructor(parent = null, id = 0, funName = "main") {
        this.funName = funName;
        this.id = id;
        this.parent = parent;
        this.variables = {};  // Variables locales de este scope
        this.children = [];   // Scopes hijos
        Scope.instances.push(this);
    }

    addVariable(name, type, value, line) {
        if (name in this.variables) {
            throw new Error(`Variable '${name}' ya está definida en este alcance.`);
        }
        const variable = new Variable(name, type, value, line);
        variable.id = Object.keys(this.variables).length;  // Asignamos un ID único por scope
        this.variables[name] = variable;
        return [0, variable.id];
    }

    static getEnvAndLocal(scope, name, env = 0) {
        if (scope.variables[name] !== undefined) {
            return [env, scope.variables[name].id];
        } else if (scope.parent) {
            return Scope.getEnvAndLocal(scope.parent, name, env + 1);
        } else {
            throw new Error(`Variable '${name}' no está definida en este alcance.`);
        }
    }

    static getVariable(scope, name) {
        if (scope.variables[name] !== undefined) {
            return scope.variables[name];
        } else if (scope.parent) {
            return Scope.getVariable(scope.parent, name);
        }
        return null;
    }

    static addChild(parent, child) {
        parent.children.push(child);
    }

    static getChildren(scope) {
        return scope.children;
    }

    static getParent(scope) {
        return scope.parent;
    }

    static getVariables(scope) {
        return scope.variables;
    }

    static getId(scope) {
        return scope.id;
    }
}

class SymbolTable {
    static globalScope = new Scope(null, 0);
    static currentScope = SymbolTable.globalScope;
    static nextScopeId = 1;

    static addVariable(name, type, value, line) {
        return SymbolTable.currentScope.addVariable(name, type, value, line);
    }

    static getEnvAndLocal(name) {
        return Scope.getEnvAndLocal(SymbolTable.currentScope, name);
    }

    static getVariable(name) {
        return Scope.getVariable(SymbolTable.currentScope, name);
    }

    static addScope(funName) {
        const newScope = new Scope(SymbolTable.currentScope, SymbolTable.nextScopeId, funName);
        Scope.addChild(SymbolTable.currentScope, newScope);
        SymbolTable.currentScope = newScope;
        SymbolTable.nextScopeId++;
    }

    static getScopeIdbyName(funName) {
        let scope = SymbolTable.globalScope;
        while (scope) {
            if (scope.funName === funName) {
                return scope.id;
            }
            scope = scope.children[0];
        }
        throw new Error(`Función '${funName}' no está definida.`);
    }

    static setScope(scope) {
        SymbolTable.currentScope = scope;
    }

    static getCurrentScopeId() {
        return Scope.getId(SymbolTable.currentScope);
    }

    static getCurrentScope() {
        return SymbolTable.currentScope;
    }

    static getGlobalScope() {
        return SymbolTable.globalScope;
    }

    static exitScope() {
        if (SymbolTable.currentScope.parent) {
            SymbolTable.currentScope = SymbolTable.currentScope.parent;
        } else {
            throw new Error("No se puede salir del alcance global.");
        }
    }
}

export default SymbolTable;
