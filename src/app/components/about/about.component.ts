import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';
import { PageTop } from '../../models/app.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private sharedService: SharedService) { 
    this.sharedService.showBanner(false);
    this.sharedService.showPageTop(true);
    this.sharedService.showPageTopData(new PageTop('About', '', [
      { name: 'Home', route: '/home', title: 'Home' },
      { name: 'About', route: '', title: 'About' }
    ]));
  }

  ngOnInit() {
  }

}
