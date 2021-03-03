import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './../../shared/user.moddel';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  var:any;
  uniqueId :any;
  

  loginForm = new FormGroup({
    email_Id : new FormControl(),
    password : new FormControl()
  });

  constructor(private router: Router,public userService: UserService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('sessionData')==null){
      this.router.navigate(['']);
    }    
  }

  // doLogin(){
  //   var  firstName='dhanu';
  //   var  native='SLK';
  //   this.userService.doLogin(firstName,native).subscribe((res) => {
  //     this.userService.users = res as User[];
  //     console.log(this.userService.users[0].educationDet);
  //     a=this.userService.users[0];
  //     console.log(a);
  //    });
  //   this.router.navigate(['app-user']);
  //   };
  doLogin(data:any){
    this.userService.doLogin(data.email_Id,data.password).subscribe((res) => {
          this.userService.users = res as User[];
          this.uniqueId=this.userService.users[0]._id;
          sessionStorage.setItem('sessionData',this.uniqueId);
          this.router.navigate(['app-user']);
         });
      
         

  }
}
