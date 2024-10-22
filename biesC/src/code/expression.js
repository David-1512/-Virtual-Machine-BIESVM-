class Expression {
    constructor(expression) {
        this.expression = expression;
    }

    toString() {
        if (this.operator) {
            return `(${this.left.toString()} ${this.operator} ${this.right.toString()})`;
        }
        return this.left.toString();
    }
}

export default Expression;
