import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { User } from '../../models/app.model';
import { Constants } from "../../helper/app.constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    console.log("UserService Initialized...");

    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  post(user: User): Promise<any> {    
    return this.http.post(Constants.API_URL + 'user/postUser', user, this.options).toPromise()
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
