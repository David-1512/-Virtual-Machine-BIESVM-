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
            Errors.addError(`Identificador '${name}' no está definido en este alcance. Línea: ${currentLine || 'Desconocida'}.`);
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
        return null;
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

    static getCantParams() {
        return Scope.getParams(SymbolTable.currentScope);
    }

    static setCantParams(params) {
        SymbolTable.currentScope.params = params;
    }

    static checkCantArgs(cantArgs, funName, currentLine = null) {        
        const funScope = SymbolTable.getScopeIdbyName(funName, currentLine);
        console.log('funScope', funScope);
        if(funScope === null) {
            return;
        }
        const params = Scope.getParams(Scope.getScopeById(funScope));
        if (params !== cantArgs) {
            Errors.addError(`Cantidad de argumentos incorrecta para función '${funName}'. Línea: ${currentLine || 'Desconocida'}.`);
        }
    }

    static checkIsFunction(name, currentLine = null) {
        const identifier = SymbolTable.getIdentifier(name, currentLine);
        if (identifier && !identifier.isFunction) {
            Errors.addError(`Identificador '${name}' no es una función. Línea: ${currentLine || 'Desconocida'}.`);
        }
    }

}

export default SymbolTable;
