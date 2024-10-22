class Condition {
    constructor(condition, thenBlock, elseBlock) {
        this.condition = condition;
        this.thenBlock = thenBlock;
        this.elseBlock = elseBlock;
    }

    toString() {
        return `if (${this.condition.toString()}) then ${this.thenBlock.toString()} else ${this.elseBlock.toString()}`;
    }
}

export default Condition;
