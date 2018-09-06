import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private sharedService: SharedService) { 
    this.sharedService.showHeader(false);
    this.sharedService.showBanner(false);
    this.sharedService.showFooter(false);    
    this.sharedService.showPageTop(false);
    this.sharedService.showPageTopData(null);
  }

  ngOnInit() {
  }

}
