interface BlockData {
    index: number;
    hash: string;
    previousHash: string;
    nonce: number;
    transactions: any[];
    key: string;
};

export default class Block implements BlockData{
    constructor(
        public index: number = 0,
        public hash: string = '',
        public previousHash: string = '',
        public nonce: number = 0,
        public transactions: any[] = []
    ) {}
    get key(): string {
        return JSON.stringify(this.transactions) + this.index + this.previousHash + this.nonce;
    }
}