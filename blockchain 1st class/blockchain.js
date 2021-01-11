function Blockchain(){
    this.chain=[];
    this.memPool=[];
    this.hash=0;
}

Blockchain.prototype.createNewBlock=function(nonce,previousHash){
    if(this.chain.length == 0){
        previousHash=null;
        
    }else{
        previousHash=this.chain[this.chain.length-1].hash;
    }
    var Block={
        'height':this.chain.length,
        'timesstamp':Date.now(),
        'transactions':this.memPool,
        'previousHash':previousHash,
        'hash':this.hash++,
        'nonce':nonce
    }
    this.chain.push(Block);
    this.memPool=[];
}
Blockchain.prototype.getLastBlock=function(){
    var index=this.chain.length
    return this.chain[index-1];
}
Blockchain.prototype.createNewTx=function(amount,sender,reciver){
    var tx={
        'timestamp':Date.now(),
        'amount':amount,
        'sender':sender,
        'reciver':reciver
    }
    this.memPool.push(tx);
    var newBlock=this.chain.length;
    return 'new Transaction will be added at Block height'+newBlock;
}
Blockchain.prototype.getTxOfBlock = function(height) {
    var block=this.chain[height];
    if(block){
        return block.transactions;
    }else{
        return 'Block Not Found';
    }
}
module.exports =Blockchain