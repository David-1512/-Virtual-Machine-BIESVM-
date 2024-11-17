import Identifier from './identifier.js';
import {Errors, Logs} from './control.js';

export default class Scope {
    static instances = [];

    constructor(parent = null, id = 0, funName = 'main') {
        Logs.addLog(`4Creando scope ${funName} con id ${id}`);
        this.funName = funName;
        this.id = id;
        this.parent = parent;
        this.bindings = {}; // Bindings locales de este scope
        this.children = []; // Scopes hijos
        Scope.instances.push(this);
    }


    addIdentifier(name, type, value, line, currentLine = line) {
        if (name in this.bindings) {
            Errors.addError(`5Identificador '${name}' ya está definido en este alcance. Línea: ${currentLine}.`);
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
            Errors.addError(`6Identificador '${name}' no está definido en este alcance. Línea: ${currentLine || 'Desconocida'}.`);
            return false;
        }
        if (identifier && identifier.type === 'const') {
            Errors.addError(`7No se puede reasignar ${identifier.type} identificador '${name}'. Línea: ${currentLine || identifier.line}.`);
            return false;
        }        
        return true;
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
            Errors.addError(`8Identificador '${name}' no está definido en este alcance. Línea: ${currentLine || 'Desconocida'}.`);
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