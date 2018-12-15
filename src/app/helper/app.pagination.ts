export class Pagination{
    numbers:number[];
    index:number;
    count: number;
    totalCount: number;        
    list:any;    
    searchText:string;
    orderBy:string;
    orderDir:string;

    public nextCallBack: { (): void; };
    public previousCallBack: { (): void; };
    public firstCallBack: { (): void; };
    public lastCallBack: { (): void; };
    public currentCallBack: { (): void; };
    public searchCallBack: { (): void; };
    public orderCallBack: { (by): void; };

    constructor(numbers:number[], index:number, count:number, list:any, searchText:string, orderBy:string, orderDir:string){
        this.numbers = numbers;
        this.index = index;
        this.count = count;
        this.list = list;    
        this.searchText = searchText;    
        this.orderBy = orderBy;
        this.orderDir = orderDir;
    }

    next(){        
        if(this.index + this.count < this.totalCount){            
            this.index += this.count;
            this.nextCallBack();
        }
    }
  
    previous(){        
        if(this.index - this.count >= 0){            
            this.index -= this.count;
            this.previousCallBack();
        }
    }
  
    first(){        
        this.index = 0;
        this.firstCallBack();
    }
  
    last(){        
        this.index = (Math.ceil(this.totalCount / this.count) * this.count) - this.count;        
        this.lastCallBack();
    }
  
    current(page){
        this.index = this.count * (page - 1);
        this.currentCallBack();    
    }

    search(){
        this.index = 0;
        this.searchCallBack();
    }

    order(by){
        this.index = 0;
        this.orderDir = this.orderDir == 'ASC' ? 'DESC' : 'ASC'
        this.orderCallBack(by);
    }
}