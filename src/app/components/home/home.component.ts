import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../../services/shared/shared.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sharedService: SharedService) { 
    this.sharedService.showHeader(true);
    this.sharedService.showBanner(true);
    this.sharedService.showPageTop(false);
    this.sharedService.showPageTopData(null);
  }

  ngOnInit() {
  }

}
