class Code {
    constructor() {
        this.statements = [];
    }

    addStatement(statement) {
        this.statements.push(statement);
    }

    getStatement() {
        return this.statements.pop();
    }

    toString() {
        let str = '';
        for (const key in this.statements) {
            if (this.statements.hasOwnProperty(key)) {
                const statement = this.statements[key];
                str += `${statement.toString()}\n`;
            }
        }
        return str;
    }
}

export default Code;
