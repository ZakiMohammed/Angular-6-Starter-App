import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';
import { UserService } from '../../services/user/user.service';
import { Alert, User } from '../../models/app.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert:Alert;
  user:User;
  registerForm:FormGroup;

  constructor(private router: Router, private sharedService: SharedService, private userService: UserService) { 
    this.sharedService.showHeader(false);
    this.sharedService.showFooter(false);    
    this.sharedService.showBanner(false);
    this.sharedService.showPageTop(false);
    this.sharedService.showPageTopData(null); 
    
    this.user = new User(0, '', '', '', '');
    this.alert = new Alert(false, '', '');
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'userName': new FormControl(this.user.userName, [
        Validators.required
      ])
    });  
  }

  onSubmit() {
<<<<<<< HEAD
    console.log(this.user)
    //return;
=======
    console.log(this.user)    
>>>>>>> a2fdddb9197d7b7f6113d07a989e64e47d541110
    this.alert.progress();            
    this.userService.post(this.user).then(response => {

      if (response.message == 'exist') {                
        this.alert.error('User already exist');
      }
      else{
        this.user = new User(0, '', '', '', '');
        this.alert.success('User registered successfully. Redirecting please wait...');
        setTimeout(() => {        
          this.router.navigate(['login']);
        }, 2000);
      }      
    }, error => {
      this.alert.error('Something went wrong.');
    });
  }

  get userName() { return this.registerForm.get('userName'); }

}
