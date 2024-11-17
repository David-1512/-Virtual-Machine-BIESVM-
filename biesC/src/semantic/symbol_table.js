import { Errors, Logs } from './control.js';

class Identifier {
    constructor(name, type, value, line) {
        this.name = name;
        this.id = -1; // id se asignará en el scope
        this.type = type; // 'const', 'let', 'var', 'function'
        this.value = value;
        this.line = line;
        this.isfunction = false;
    }

    isFunction() {
        return this.isfunction;
    }

    setIsFunction(value = true) {
        this.isfunction = value;
    }
}

class Scope {
    static instances = [];

    constructor(parent = null, id = 0, funName = 'main') {
        Logs.addLog(`Creando scope ${funName} con id ${id}`);
        this.funName = funName;
        this.id = id;
        this.parent = parent;
        this.bindings = {}; // Bindings locales de este scope
        this.children = []; // Scopes hijos
        Scope.instances.push(this);
    }


    addIdentifier(name, type, value, line, currentLine = line) {
        if (name in this.bindings) {
            Errors.addError(`Identificador '${name}' ya está definido en este alcance. Línea: ${currentLine}.`);
            //throw new Error(`Identifier '${name}' ya está definido en este alcance. Línea: ${currentLine}.`);
        }
        const identifier = new Identifier(name, type, value, line);
        if (type === 'function') {
            identifier.setIsFunction();
        }
        identifier.id = Object.keys(this.bindings).length; // Asignamos un ID único por scope
        this.bindings[name] = identifier;
        return [0, identifier.id];
    }

    reassignIdentifier(name, newValue, currentLine = null) {
        const identifier = Scope.getIdentifier(this, name);
        if (!identifier) {
            Errors.addError(`Identificador '${name}' no está definido en este alcance. Línea: ${currentLine || 'Desconocida'}.`);
            //throw new Error(`Identificador '${name}' no está definido en este alcance. Línea: ${currentLine || 'Desconocida'}.`);
        }
        if (identifier.type === 'const') {
            Errors.addError(`No se puede reasignar ${identifier.type} identificador '${name}'. Línea: ${currentLine || identifier.line}.`);
            //throw new Error(`No se puede reasignar ${identifier.type} identificador '${name}'. Línea: ${currentLine || identifier.line}.`);
        }
        identifier.value = newValue;
        return [1, identifier.id];
    }

	identifierExists(name) {
		return this.bindings[name] !== undefined;
	}

    static getEnvAndLocal(scope, name, currentLine = null, env = 0) {
        if (scope.bindings[name] !== undefined) {
            return [env, scope.bindings[name].id];
        } else if (scope.parent) {
            return Scope.getEnvAndLocal(scope.parent, name, currentLine, env + 1);
        } else {
            Errors.addError(`Identificador '${name}' no está definido en este alcance. Línea: ${currentLine || 'Desconocida'}.`);
            //throw new Error(`Identifier '${name}' no está definido en este alcance. Línea: ${currentLine || 'Desconocida'}.`);
        }
    }

    static getIdentifier(scope, name, currentLine = null) {
        if (scope.bindings[name] !== undefined) {
            return scope.bindings[name];
        } else if (scope.parent) {
            return Scope.getIdentifier(scope.parent, name, currentLine);
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

    static getBindings(scope) {
        return scope.bindings;
    }

    static getId(scope) {
        return scope.id;
    }
}

class SymbolTable {
    static globalScope = new Scope(null, 0, 'global');
    static currentScope = SymbolTable.globalScope;
    static nextScopeId = 1;

    static addIdentifier(name, type, value, line) {
        return SymbolTable.currentScope.addIdentifier(name, type, value, line, line);
    }

    static reassignIdentifier(name, newValue, line) {
        return SymbolTable.currentScope.reassignIdentifier(name, newValue, line);
    }

    static getEnvAndLocal(name, currentLine ) {
        return Scope.getEnvAndLocal(SymbolTable.currentScope, name, currentLine);
    }

    static getIdentifier(name,  currentLine = null) {
        return Scope.getIdentifier(SymbolTable.currentScope, name, currentLine);
    }

	static setIdentifierFunction(name, value = true, currentLine = null) {
		const identifier = SymbolTable.getIdentifier(name, currentLine);
		if (!identifier) {
            Errors.addError(`Identificador '${name}' no está definido en este alcance. Línea: ${currentLine || 'Desconocida'}.`);
			//throw new Error(`Identificador '${name}' no está definido en este alcance. Línea: ${currentLine || 'Desconocida'}.`);
		}
		identifier.setIsFunction(value);
	}

    static addScope(funName) {
        const newScope = new Scope(SymbolTable.currentScope, SymbolTable.nextScopeId, funName);
        Scope.addChild(SymbolTable.currentScope, newScope);
        SymbolTable.currentScope = newScope;
        SymbolTable.nextScopeId++;
    }

    static getScopeIdbyName(funName,  currentLine = null) {
        let scope = SymbolTable.globalScope;
        while (scope) {
            if (scope.funName === funName) {
                return scope.id;
            }
            scope = scope.children[0];
        }
        Errors.addError(`Función '${funName}' no está definida. Línea: ${currentLine || 'Desconocida'}.`);
        //throw new Error(`Función '${funName}' no está definida. Línea: ${currentLine || 'Desconocida'}.`);
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
            Errors.addError('No se puede salir del alcance global.');
            //throw new Error('No se puede salir del alcance global.');
        }
    }

    static getParentCurrentScopeID() {
        let parentScope = SymbolTable.currentScope.parent;
        if (!parentScope) {
            return 0;
        }
        return parentScope.id;
    }

    static toString() {
        let str = '';
        for (const scope of Scope.instances) {
            str += `Scope: ${scope.id} ${scope.funName}\n`;
            for (const key in scope.bindings) {
                if (scope.bindings.hasOwnProperty(key)) {
                    const identifier = scope.bindings[key];
                    str += `  ${identifier.name} ${identifier.type} ${identifier.value} ${identifier.line}\n`;
                }
            }
        }
        return str;
    }
}

export default SymbolTable;






// class Variable {
// 	constructor(name, type, value, line) {
// 		this.name = name;
// 		this.id = -1; // id se asignará en el scope
// 		this.type = type;
// 		this.value = value;
// 		this.line = line;
// 		this.isfunction = false;
// 	}

// 	isfunction() {
// 		return this.isfunction;
// 	}

// 	setIsFunction(value = true) {
// 		this.isfunction = value;
// 	}
// }

// class Scope {
// 	static instances = [];

// 	constructor(parent = null, id = 0, funName = 'main') {
// 		this.funName = funName;
// 		this.id = id;
// 		this.parent = parent;
// 		this.variables = {}; // Variables locales de este scope
// 		this.children = []; // Scopes hijos
// 		Scope.instances.push(this);
// 	}

// 	addVariable(name, type, value, line) {
// 		if (name in this.variables) {
// 			throw new Error(`Variable '${name}' ya está definida en este alcance.`);
// 		}
// 		const variable = new Variable(name, type, value, line);
// 		variable.id = Object.keys(this.variables).length; // Asignamos un ID único por scope
// 		this.variables[name] = variable;
// 		return [0, variable.id];
// 	}

// 	static getEnvAndLocal(scope, name, env = 0) {
// 		if (scope.variables[name] !== undefined) {
// 			return [env, scope.variables[name].id];
// 		} else if (scope.parent) {
// 			return Scope.getEnvAndLocal(scope.parent, name, env + 1);
// 		} else {
// 			throw new Error(`Variable '${name}' no está definida en este alcance.`);
// 		}
// 	}

// 	static getVariable(scope, name) {
// 		if (scope.variables[name] !== undefined) {
// 			return scope.variables[name];
// 		} else if (scope.parent) {
// 			return Scope.getVariable(scope.parent, name);
// 		}
// 		return null;
// 	}

// 	static addChild(parent, child) {
// 		parent.children.push(child);
// 	}

// 	static getChildren(scope) {
// 		return scope.children;
// 	}

// 	static getParent(scope) {
// 		return scope.parent;
// 	}

// 	static getVariables(scope) {
// 		return scope.variables;
// 	}

// 	static getId(scope) {
// 		return scope.id;
// 	}
// }

// class SymbolTable {
// 	static globalScope = new Scope(null, 0);
// 	static currentScope = SymbolTable.globalScope;
// 	static nextScopeId = 1;

// 	static addVariable(name, type, value, line) {
// 		return SymbolTable.currentScope.addVariable(name, type, value, line);
// 	}

// 	static getEnvAndLocal(name) {
// 		return Scope.getEnvAndLocal(SymbolTable.currentScope, name);
// 	}

// 	static getVariable(name) {
// 		return Scope.getVariable(SymbolTable.currentScope, name);
// 	}

// 	static addScope(funName) {
// 		const newScope = new Scope(SymbolTable.currentScope, SymbolTable.nextScopeId, funName);
// 		Scope.addChild(SymbolTable.currentScope, newScope);
// 		SymbolTable.currentScope = newScope;
// 		SymbolTable.nextScopeId++;
// 	}

// 	static getScopeIdbyName(funName) {
// 		let scope = SymbolTable.globalScope;
// 		while (scope) {
// 			if (scope.funName === funName) {
// 				return scope.id;
// 			}
// 			scope = scope.children[0];
// 		}
// 		throw new Error(`Función '${funName}' no está definida.`);
// 	}

// 	static setScope(scope) {
// 		SymbolTable.currentScope = scope;
// 	}

// 	static getCurrentScopeId() {
// 		return Scope.getId(SymbolTable.currentScope);
// 	}

// 	static getCurrentScope() {
// 		return SymbolTable.currentScope;
// 	}

// 	static getGlobalScope() {
// 		return SymbolTable.globalScope;
// 	}

// 	static exitScope() {
// 		if (SymbolTable.currentScope.parent) {
// 			SymbolTable.currentScope = SymbolTable.currentScope.parent;
// 		} else {
// 			throw new Error('No se puede salir del alcance global.');
// 		}
// 	}
// }

// export default SymbolTable;
