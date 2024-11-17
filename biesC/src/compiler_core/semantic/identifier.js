export default class Identifier {
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