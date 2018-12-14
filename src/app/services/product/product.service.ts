import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import { Constants } from '../../helper/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http) {
    console.log("ProductService Initialized...");
  }

  getProductAll() {
    return this.http.get(Constants.API_URL + 'product')
      .pipe(map(res => res.json()));
  }
  getProducts(index:number, size:number, search:string = '', orderBy:string = 'ID', orderDir:string = 'DESC') {
    return this.http.get(Constants.API_URL + `product?index=${index}&size=${size}&search=${search}&orderBy=${orderBy}&orderDir=${orderDir}`)
      .pipe(map(res => res.json()));
  }
  getProduct(id: number) {
    return this.http.get(Constants.API_URL + 'product?id=' + id)
      .pipe(map(res => res.json()));
  }
}
