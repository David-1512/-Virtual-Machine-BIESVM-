class Statement {
    constructor(type, expressions) {
        this.type = type;
        this.expressions = expressions;
    }


    toString() {
        let str = `${this.type}: \n`;
        for (const key in this.expressions) {
            if (this.expressions.hasOwnProperty(key)) {
                const expression = this.expressions[key];
                str += `${expression.toString()}\n`;
            }
        }
        return str;
    }
}

export default Statement;
