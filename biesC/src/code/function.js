class Function {
    constructor(name, params = [], block) {
        this.name = name;
        this.params = params;
        this.block = block;
    }

    getId() {
        return this.name;
    }

    toString() {
        return `fun ${this.name}(${this.params.join(', ')}) => ${this.block.toString()}`;
    }
}

export default Function;
