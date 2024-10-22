class Block {
    constructor(statements = []) {
        this.statements = statements;
    }

    addStatement(statement) {
        this.statements.push(statement);
    }

    toString() {
        return this.statements.map(stmt => stmt.toString()).join('\n');
    }
}

export default Block;
