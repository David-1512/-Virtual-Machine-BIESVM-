class Instruccion {
    constructor(mnemonic,valor) {
        this.mnemonic = mnemonic;
        this.valor = valor;
    }

    toString() {
        let str = `${this.mnemonic}`;
        if (this.valor !== undefined) {
            str += ` ${this.valor}`;
        }
        return str += '\n';
    }
}

export default Instruccion;
            