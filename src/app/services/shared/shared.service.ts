import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageTop } from "./../../models/app.model";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private subjectHeader:BehaviorSubject<boolean>;
  private subjectFooter:BehaviorSubject<boolean>;
  private subjectBanner:BehaviorSubject<boolean>;
  private subjectPageTop:BehaviorSubject<boolean>;
  private subjectPageTopData:BehaviorSubject<PageTop>;

  public header: Observable<boolean>;
  public footer: Observable<boolean>;
  public banner: Observable<boolean>;
  public pageTop: Observable<boolean>;
  public pageTopData: Observable<PageTop>;

  constructor() { 

    this.subjectHeader = new BehaviorSubject(true);
    this.subjectFooter = new BehaviorSubject(true);
    this.subjectBanner = new BehaviorSubject(false);
    this.subjectPageTop = new BehaviorSubject(true);
    this.subjectPageTopData = new BehaviorSubject(new PageTop('', '', []));

    this.header = this.subjectHeader.asObservable();
    this.footer = this.subjectFooter.asObservable();
    this.banner = this.subjectBanner.asObservable();
    this.pageTop = this.subjectPageTop.asObservable();
    this.pageTopData = this.subjectPageTopData.asObservable();
  }

  showHeader(value: boolean) {
    this.subjectHeader.next(value);
  }
  showFooter(value: boolean) {
    this.subjectFooter.next(value);
  }
  showBanner(value: boolean) {
    this.subjectBanner.next(value);
  }  
  showPageTop(value: boolean) {
    this.subjectPageTop.next(value);
  }
  showPageTopData(value: PageTop){
    this.subjectPageTopData.next(value);
  }
}