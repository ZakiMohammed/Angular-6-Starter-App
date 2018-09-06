import { Component, OnInit } from '@angular/core';
import { Services } from '@angular/core/src/view';
import { ServiceService } from '../../services/service/service.service';
import { SharedService } from '../../services/shared/shared.service';
import { PageTop } from '../../models/app.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: Services[];

  constructor(private serviceService: ServiceService, private sharedService: SharedService) {
    this.sharedService.showBanner(false);
    this.sharedService.showPageTop(true);
    this.sharedService.showPageTopData(new PageTop('Services', '', [
      { name: 'Home', route: '/home', title: 'Home' },
      { name: 'Services', route: '', title: 'Services' }
    ]));
  }

  ngOnInit() {
    this.serviceService.getServiceAll().subscribe(services => {
      this.services = services;
    });
  }

}
