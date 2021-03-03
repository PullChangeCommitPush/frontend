import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './../../shared/user.moddel';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  loginForm = new FormGroup({
    email_Id : new FormControl(),
    password : new FormControl()
  });

  constructor( public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('sessionData')==null){
      this.router.navigate(['']);
    }
  
    if(sessionStorage.getItem('sessionData')!=null){
      this.userService.getParticularRecord(sessionStorage.getItem('sessionData')).subscribe((res)=>{
        this.userService.users = res as User[];
      });
    }     
  } 
  doLogin(){
    this.router.navigate(['app-user']);
  }
  doLogout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}