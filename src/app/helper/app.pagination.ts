export class Pagination{
    numbers:number[];
    numbersCount: number;
    index:number;
    count: number;
    totalCount: number;        
    list:any;    
    searchText:string;
    orderBy:string;
    orderDir:string;
    nextDots:boolean;
    prevDots:boolean;

    public nextCallBack: { (): void; };
    public previousCallBack: { (): void; };
    public firstCallBack: { (): void; };
    public lastCallBack: { (): void; };
    public currentCallBack: { (): void; };
    public searchCallBack: { (): void; };
    public orderCallBack: { (by): void; };

    constructor(numbers:number[], index:number, count:number, list:any, searchText:string, orderBy:string, orderDir:string, numbersCount: number = 10){
        this.numbers = numbers;
        this.index = index;
        this.count = count;
        this.list = list;    
        this.searchText = searchText;    
        this.orderBy = orderBy;
        this.orderDir = orderDir;
        this.numbersCount = numbersCount;
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
  
    current(page:number){
        this.index = this.count * (page - 1);
        this.currentCallBack();    
    }

    search(){
        this.index = 0;
        this.searchCallBack();
    }

    order(by:string){
        this.index = 0;
        this.orderDir = this.orderDir == 'ASC' ? 'DESC' : 'ASC'
        this.orderCallBack(by);
    }

    adjustNumbers(total:number){
        let limit = this.index + (this.numbersCount - (this.index % this.numbersCount));
        let start = limit + 1;
        let end = limit + this.numbersCount;

        this.numbers = [];
        for (let i = start; i <= end; i++) {
            this.numbers.push(i);
        }
    }
}