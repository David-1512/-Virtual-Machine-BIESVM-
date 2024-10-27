class Code {
    constructor() {
        this.statements = [];
        this.asigments  = new Map();
    }

    addAsigments(variable, valor){
        this.asigments.set(variable, valor);
    }

    getValorAsigment(variable){
        return this.asigments.get(variable);
    }

    existAsigment(variable){
        return this.asigments.has(variable)
    } 

    addStatement(statement) {
        this.statements.push(statement);
    }

    getStatement() {
        return this.statements.pop();
    }

    toString() {
        /*let str = '';
        for (const key in this.statements) {
            if (this.statements.hasOwnProperty(key)) {
                const statement = this.statements[key];
                str += `${statement.toString()}\n`;
            }
        }
        return str;*/
        let str = '';
        for (const [key, value] of this.asigments) {
           str += `Clave: ${key}, Valor: ${value} \n`;
        }
        return str;
    }
}

export default Code;
