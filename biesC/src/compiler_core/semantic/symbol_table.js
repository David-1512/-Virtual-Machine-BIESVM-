import { Errors, Logs } from './control.js';
import Scope from './scope.js';
class SymbolTable {
    static globalScope = new Scope(null, 0, 'global');
    static currentScope = SymbolTable.globalScope;
    static nextScopeId = 1;

    static addIdentifier(name, type, value, line) {
        return SymbolTable.currentScope.addIdentifier(name, type, value, line, line);
    }

    static reassignIdentifier(name, newValue, line) {
        if (SymbolTable.currentScope.reassignIdentifier(name, newValue, line)) {
            return Scope.getEnvAndLocal(SymbolTable.currentScope, name, line);
        }
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
            Errors.addError(`1Identificador '${name}' no está definido en este alcance. Línea: ${currentLine || 'Desconocida'}.`);
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
        Errors.addError(`2Función '${funName}' no está definida. Línea: ${currentLine || 'Desconocida'}.`);
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
            Errors.addError('3No se puede salir del alcance global.');
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
