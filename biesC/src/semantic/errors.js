class Errors {
	static errors = [];

	static getErrors() {
		return this.errors;
	}

	static addError(error) {
		this.errors.push(error);
	}

	static printErrors() {
		for (let i = 0; i < this.errors.length; i++) {
			console.error(this.errors[i]);
		}
	}
}
