import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Contact } from '../../models/app.model';
import { Constants } from 'src/app/helper/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    console.log("ContactService Initialized...");

    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  post(contact: Contact): Promise<Contact> {    
    return this.http.post(Constants.API_URL + 'contact', contact, this.options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
