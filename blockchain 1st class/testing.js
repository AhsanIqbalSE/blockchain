var Blockchain= require('./blockchain.js')
var bitcoin = new Blockchain();
bitcoin.createNewBlock(12345,'asass')
bitcoin.createNewTx(12000,'ahsan','farhan')
bitcoin.createNewTx(12000,'ahsan','ali')
bitcoin.createNewBlock(12345,'ahsan')
bitcoin.createNewBlock(12345,'ali')
bitcoin.createNewBlock(12345,'mustafa')
// var lastBlock=bitcoin.getLastBlock();
console.log(bitcoin)
// console.log(bitcoin.getTxOfBlock(1))