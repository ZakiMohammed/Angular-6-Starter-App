import { Component, OnInit } from '@angular/core';
import { Alert } from '../../models/app.model';
import { Contact, PageTop } from '../../models/app.model';
import { SharedService } from '../../services/shared/shared.service';
import { ContactService } from '../../services/contact/contact.service';
import { NgForm } from '@angular/forms';
import { Helper } from 'src/app/helper/app.helper';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  alert: Alert;
  contact: Contact;

  constructor(
    private sharedService: SharedService, 
    private contactService: ContactService
  ) {
    this.sharedService.showBanner(false);
    this.sharedService.showPageTop(true);
    this.sharedService.showPageTopData(new PageTop('Contact', '', [
      { name: 'Home', route: '/home', title: 'Home' },
      { name: 'Contact', route: '', title: 'Contact' }
    ]));

    this.contact = new Contact(0, '', '', '', '');
    this.alert = new Alert(false, '', '');
  }

  ngOnInit() {
  }

  onSubmit(contactForm: NgForm) {
    Helper.validateForm(contactForm.form);    
    if (contactForm.valid) {
      this.alert.progress();
      this.contactService.post(this.contact).then(contact => {
        this.alert.success('Message delivered successfully.');
        this.contact = new Contact(0, '', '', '', '');
        contactForm.form.reset();
      }, error => {
        this.alert.error('Something went wrong.');
      });
    }
  }

}
