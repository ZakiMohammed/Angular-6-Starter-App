import { Component } from '@angular/core';
import { SharedService } from "./services/shared/shared.service";
import { PageTop } from "./models/app.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header:boolean;
  footer:boolean;
  banner:boolean;
  pageTop:boolean;
  pageTopData:PageTop;

  constructor(private sharedService: SharedService) { 
    this.sharedService.header.subscribe(header => this.header = header);
    this.sharedService.footer.subscribe(footer => this.footer = footer);
    this.sharedService.banner.subscribe(banner => this.banner = banner);
    this.sharedService.pageTop.subscribe(pageTop => this.pageTop = pageTop);
    this.sharedService.pageTopData.subscribe(pageTopData => this.pageTopData = pageTopData);
  }
}
