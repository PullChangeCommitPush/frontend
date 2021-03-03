import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from './../../shared/user.moddel';
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
   varId:any;
   isSave=false;

   record = new User;
  
  personalDetForm = new FormGroup({
    firstName : new FormControl(),
    lastName : new FormControl(),
    address : new FormControl(),
    phone : new FormControl(),
    emailId : new FormControl(),
    linkedInProfile : new FormControl()
  });

  constructor(private router: Router,public userService: UserService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('sessionData')==null){
      this.router.navigate(['']);
    }else{
      this.varId=sessionStorage.getItem('sessionData');
    
      this.userService.getParticularRecord(this.varId).subscribe((res)=>{
        this.userService.selectedUser = res as User;
        this.record=this.userService.selectedUser;       
        // console.log(this.record.personalDet?.firstName,this.record.personalDet?.lastName,this.record.personalDet?.linkedInProfile,
        //   this.record.personalDet?.phone,this.record.personalDet?.address);
        //   console.log(this.record.skills)
      });
  }
}
  doLogout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  fillPersonalDet(data:any){
    console.log(data.firstName,data.lastName)
    if(this.record.personalDet){
      this.record.personalDet.firstName=data.firstName;
      this.record.personalDet.lastName=data.lastName;
      this.record.personalDet.phone=data.phone;
      this.record.personalDet.linkedInProfile=data.linkedInProfile;
      this.record.personalDet.address=data.address;
    }
 
    // this.userService.postMethod(this.record).subscribe((res)=>{
    //   console.log(res);
    // });
    this.userService.updateParticularRecord(this.varId,this.record).subscribe((res)=>{
      if(res){
        this.isSave=true;
        setTimeout( ()=> {
          console.log('hide');
          this.isSave = false;
       }, 4000);
       window.location.reload();
      }
    });
  }  
}