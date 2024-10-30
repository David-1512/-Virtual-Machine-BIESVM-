class Block {
    constructor(id,parent,argument) {
        this.id = id;
        this.parent = parent;
        this.argument = argument;
        this.instruccions = [];
        this.variables = new Map();
    }

    getId(){
        return this.id;
    }

    getInstruccion(){
        return this.instruccions.pop();
    }

    addInstruccion(instruccion){
       this.instruccions.push(instruccion);
    }

    addVariable(valor){
        this.variables.set(variables.size, valor);
    }

    getVariable(variable){
        return this.variables.get(variable);
    }

    getKeyByValue(value) {
        for (let [key, val] of this.variables.entries()) {
            if (val === value) {
                return key; 
            }
       }
   }
  

    toString() {
        let str = '';
        str += `${this.id}\n`
        for (const key in this.instruccions) {
            if (this.instruccions.hasOwnProperty(key)) {
                const instruccion = this.instruccions[key];
                str += `${instruccion.toString()}`;
            }
        }
        return str;
    }
}

export default Block;
            