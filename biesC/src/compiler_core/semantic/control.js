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

	static toString() {
		let errors = '';
		for (let i = 0; i < this.errors.length; i++) {
			errors += this.errors[i] + '\n';
		}
		return errors;
	}
}

class Logs {
	static logs = [];

	static getLogs() {
		return this.logs;
	}

	static addLog(log) {
		this.logs.push(log);
	}

	static printLogs() {
		for (let i = 0; i < this.logs.length; i++) {
			console.error(this.logs[i]);
		}
	}

	static toString() {
		let logs = '';
		for (let i = 0; i < this.logs.length; i++) {
			logs += this.logs[i] + '\n';
		}
		return logs;
	}
}


export { Errors, Logs };