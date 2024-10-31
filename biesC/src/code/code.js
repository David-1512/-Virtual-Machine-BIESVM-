class Code {
    constructor() {
        this.blocks = [];
    }

    addBlock(block){
        this.blocks.push(block);
     }

    getBlock(){
        return this.blocks.pop();
    }

    getCantBlocks(){
        return this.blocks.length;
    }

    toString() {
        let str = '';
        for (const block of this.blocks) {
            str += `${block.toString()}\n`; 
        }
        return str;
    }
}

export default Code;
            