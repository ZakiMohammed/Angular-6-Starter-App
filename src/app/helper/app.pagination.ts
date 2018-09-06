export class Pagination{
    numbers:number[];
    index:number;
    count: number;
    source:any;
    list:any;    

    constructor(numbers:number[], index:number, count:number, source:any, list:any){
        this.numbers = numbers;
        this.index = index;
        this.count = count;
        this.list = list;
        this.source = source;
    }

    next(){        
        if(this.index + this.count < this.source.length){            
            this.index += this.count;
            this.list = this.source.slice(this.index, this.index + this.count);
        }
    }
  
    previous(){        
        if(this.index - this.count >= 0){            
            this.index -= this.count;
            this.list = this.source.slice(this.index, this.index + this.count);
        }
    }
  
    first(){        
        this.index = 0;
        this.list = this.source.slice(this.index, this.index + this.count);
    }
  
    last(){        
        this.index = (Math.ceil(this.source.length / this.count) * this.count) - this.count;        
        this.list = this.source.slice
        (
            this.index, 
            this.index + this.count
        );
    }
  
    current(page){
        this.index = this.count * (page - 1);
        this.list = this.source.slice(this.index, this.index + this.count);        
    }
}