import Blockchain from './blockchain';
import Block from './block';
import Transaction from './transaction';

// create a genesis block
const b = new Block();

// initialize blockchain with genesis block
const bc = new Blockchain(b);

// create a transaction
const t = new Transaction('me', 'you', 7);

// mining part
const newB = bc.getNextBlock([t]);
bc.addBlock(newB);

console.log(bc.blocks[1].transactions);