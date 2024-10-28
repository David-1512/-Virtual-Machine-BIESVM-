class Block {
    constructor(id) {
        this.id = id;
        this.instruccions = [];
    }

    getInstruccion(){
        return this.instruccions.pop();
    }

    addInstruccion(instruccion){
       this.instruccions.push(instruccion);
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
            