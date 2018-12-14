export class Pagination{
    numbers:number[];
    index:number;
    count: number;
    totalCount: number;        
    list:any;    

    public nextCallBack: { (): void; };
    public previousCallBack: { (): void; };
    public firstCallBack: { (): void; };
    public lastCallBack: { (): void; };
    public currentCallBack: { (): void; };

    constructor(numbers:number[], index:number, count:number, source:any, list:any){
        this.numbers = numbers;
        this.index = index;
        this.count = count;
        this.list = list;        
    }

    next(){        
        if(this.index + this.count < this.totalCount){            
            this.index += this.count;
            this.nextCallBack();
            //this.list = this.source.slice(this.index, this.index + this.count);
        }
    }
  
    previous(){        
        if(this.index - this.count >= 0){            
            this.index -= this.count;
            this.previousCallBack();
            //this.list = this.source.slice(this.index, this.index + this.count);
        }
    }
  
    first(){        
        this.index = 0;
        this.firstCallBack();
        //this.list = this.source.slice(this.index, this.index + this.count);
    }
  
    last(){        
        this.index = (Math.ceil(this.totalCount / this.count) * this.count) - this.count;        
        this.lastCallBack();
        // this.list = this.source.slice
        // (
        //     this.index, 
        //     this.index + this.count
        // );
        
    }
  
    current(page){
        this.index = this.count * (page - 1);
        this.currentCallBack();
        //this.list = this.source.slice(this.index, this.index + this.count);        
    }
}