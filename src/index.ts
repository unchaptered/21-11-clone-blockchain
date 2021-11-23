class Block {
    public index:number;
    public hash:string;
    public previousHash:string;
    public data:string;
    public timestamp:number;
    constructor(
        index:number,
        hash:string,
        previousHash:string,
        data:string,
        timestamp:number
    ){
        this.index=index;
        this.hash=hash;
        this.previousHash=previousHash;
        this.data=data;
        this.timestamp=timestamp;
    }
}

const genesisBlock:Block=new Block(0,"2020202020202","","Hello",123456);

let blockchain:[Block]=[genesisBlock];
// TS 의 기능이 오직 Block 클래스만 blockchain 에 추가하도록 제어한다.
console.log(blockchain);

export {};