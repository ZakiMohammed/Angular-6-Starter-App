import { Component, OnInit } from '@angular/core';
import { Product, PageTop } from '../../models/app.model';
import { ProductService } from '../../services/product/product.service';
import { SharedService } from '../../services/shared/shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product: Product;

  constructor(private productService : ProductService, private sharedService: SharedService, private route: ActivatedRoute, private router: Router) {     
    this.sharedService.showHeader(true);
    this.sharedService.showFooter(true);
    this.sharedService.showBanner(false);
    this.sharedService.showPageTop(true);    
    this.sharedService.showPageTopData(new PageTop('Product', '', [
      { name: 'Home', route: '/home', title: 'Home' },
      { name: 'Product', route: '', title: 'Product' }
    ]));
  }

  ngOnInit() {    
    this.productService.getProduct(this.route.snapshot.params.id).subscribe(product => {
      this.product = product;
      this.sharedService.showPageTopData(new PageTop('Product Detail', '', [
        { name: 'Home', route: '/home', title: 'Home' },
        { name: 'Product', route: '/products', title: 'Product' },
        { name: this.product.title, route: '', title: '' }
      ]));
    });
  }

}
