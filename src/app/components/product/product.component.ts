import { Component, OnInit } from '@angular/core';
import { Pagination } from '../../helper/app.pagination';
import { ProductService } from '../../services/product/product.service';
import { SharedService } from '../../services/shared/shared.service';
import { PageTop } from '../../models/app.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  pagination: Pagination;

  constructor(private productService: ProductService, private sharedService: SharedService) {
    this.sharedService.showBanner(false);
    this.sharedService.showPageTop(true);
    this.sharedService.showPageTopData(new PageTop('Product', '', [
      { name: 'Home', route: '/home', title: 'Home' },
      { name: 'Product', route: '', title: 'Product' }
    ]));

    this.pagination = new Pagination([], 0, 5, [], '', 'Title', 'ASC');
    
    this.pagination.nextCallBack = () => {      
      this.getProducts(this.pagination.index, this.pagination.count, this.pagination.searchText, this.pagination.orderBy, this.pagination.orderDir);
    };
    this.pagination.previousCallBack = () => {
      this.getProducts(this.pagination.index, this.pagination.count, this.pagination.searchText, this.pagination.orderBy, this.pagination.orderDir);
    };
    this.pagination.firstCallBack = () => {
      this.getProducts(this.pagination.index, this.pagination.count, this.pagination.searchText, this.pagination.orderBy, this.pagination.orderDir);
    };
    this.pagination.lastCallBack = () => {
      this.getProducts(this.pagination.index, this.pagination.count, this.pagination.searchText, this.pagination.orderBy, this.pagination.orderDir);
    };
    this.pagination.currentCallBack = () => {
      this.getProducts(this.pagination.index, this.pagination.count, this.pagination.searchText, this.pagination.orderBy, this.pagination.orderDir);
    };
    this.pagination.searchCallBack = () => {      
      this.getProducts(this.pagination.index, this.pagination.count, this.pagination.searchText, this.pagination.orderBy, this.pagination.orderDir);
    };
    this.pagination.orderCallBack = (by) => {            
      this.getProducts(this.pagination.index, this.pagination.count, this.pagination.searchText, by, this.pagination.orderDir);
    };
  }

  ngOnInit() {
    this.getProducts(this.pagination.index, this.pagination.count, this.pagination.searchText);
  }

  getProducts(index:number, size:number, search:string = "", orderBy:string = "Title", orderDir:string = "ASC") {
    this.productService.getProducts(index, size, search, orderBy, orderDir).subscribe(dto => {
      this.pagination.list = dto.data;
      this.pagination.totalCount = dto.totalCount;

      this.pagination.numbers = [];
      for (var i = 1; i <= Math.ceil(dto.filterCount / this.pagination.count); i++) {
        this.pagination.numbers.push(i);
      }
    });
  }  

}
