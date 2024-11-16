class Instruccion {
	constructor(mnemonic, values) {
		this.mnemonic = mnemonic;
		this.values = values;
	}

	toString() {
		let str = `${this.mnemonic}`;
		if (this.values && this.values.length > 0) {
			str += ` ${this.values.join(' ')}`;
		}

		return str + '\n';
	}
}

export default Instruccion;
