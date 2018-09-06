import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import { Constants } from '../../helper/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: Http) {
    console.log("ServiceService Initialized...");
  }

  getServiceAll() {
    return this.http.get(Constants.API_URL + 'service')
      .pipe(map(res => res.json()));
  }
}
