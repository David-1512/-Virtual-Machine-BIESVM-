class Code {
    constructor() {
        this.blocks = [];
    }

    getBlock(){
        return this.blocks.pop();
    }

    addBlock(block){
       this.blocks.push(block);
    }

    getCantBlocks(){
        return this.blocks.length;
    }

    toString() {
        let str = '';
        for (const key in this.blocks) {
            if (this.blocks.hasOwnProperty(key)) {
                const block = this.blocks[key];
                str += `${block.toString()}`;
            }
        }
        return str;
    }
}

export default Code;
            