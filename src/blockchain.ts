import { BlockData } from "./block";
import { TransactionData } from "./transaction";

interface BlockChainData {
    blocks: BlockData[];
    addBlock(block: BlockData): void;
    // getNextBlock(transactions: TransactionData[]): BlockData;
    generateHash(block: BlockData): string;
}

export default class BlockChain implements BlockChainData {
    public blocks: BlockData[];

    constructor(genesisBlock: BlockData) {
        this.blocks = [];
        this.addBlock(genesisBlock);
    }

    public addBlock(block: BlockData): void {
        // this is the genesis block
        if(this.blocks.length === 0 ) {
            block.previousHash = '00000000';
            block.hash = this.generateHash(block);
        }
        this.blocks = [...this.blocks, block];
    }

    public generateHash(block: BlockData) {
        return '';
    }
}