class Block {
	constructor(id, argument, parent) {
		this.id = id;
		this.parent = parent;
		this.argument = argument;
		this.instruccions = [];
		this.blocks = [];
	}

	getId() {
		return this.id;
	}

	getInstruccions() {
		return this.instruccions;
	}

	getCantInstruccions() {
		return this.instruccions.length;
	}

	addInstruccion(instruccion) {
		this.instruccions.push(instruccion);
	}

	addBlock(block) {
		this.blocks.push(block);
	}

	getCantBlocks() {
		return this.blocks.length;
	}

	toString() {
		let str = '';
		for (const block of this.blocks) {
			if (block) {
				str += `${block.toString()}\n`;
			}
		}
		str += `$FUN $${this.id} args:${this.argument} parent:${this.parent} \n`;
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
