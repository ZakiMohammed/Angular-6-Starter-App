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
    this.pagination = new Pagination([], 0, 6, [], []);
    this.sharedService.showBanner(false);
    this.sharedService.showPageTop(true);
    this.sharedService.showPageTopData(new PageTop('Product', '', [
      { name: 'Home', route: '/home', title: 'Home' },
      { name: 'Product', route: '', title: 'Product' }
    ]));
  }

  ngOnInit() {
    this.productService.getProductAll().subscribe(products => {

      let list = products.slice(this.pagination.index, this.pagination.count);
      this.pagination.source = products;
      this.pagination.list = list;

      for (var i = 1; i <= Math.ceil(products.length / this.pagination.count); i++) {
        this.pagination.numbers.push(i);
      }
    });
  }

}
