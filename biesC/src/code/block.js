class Block {
    constructor(id,argument,parent) {
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
        this.variables.set(this.variables.size, valor);
    }
   
    getCantVariables(){
        return this.variables.size;
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
        str += `$Fun $${this.id} args:${this.argument} parent:${this.parent} \n`
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
            