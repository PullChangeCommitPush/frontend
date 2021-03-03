import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/user.moddel';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  isSave = false;
  varId:any;
  record = new User;

  experienceDetForm = new FormGroup({
    projectName: new FormControl(),
    projectDesc: new FormControl(),
    totalExp: new FormControl(),
    projectName1: new FormControl(),
    projectDesc1: new FormControl(),
    totalExp1: new FormControl()
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
        // console.log(this.record.experience0,this.record.experience0);
      });
    }
  }
  doLogout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  fillExperienceDet(data:any){
    if(this.record.experience0){
      this.record.experience0.year=data.totalExp;
      this.record.experience0.projectName=data.projectName;
      this.record.experience0.projectDesc=data.projectDesc;
    }
    if(this.record.experience1){
      this.record.experience1.year=data.totalExp1;
      this.record.experience1.projectName=data.projectName1;
      this.record.experience1.projectDesc=data.projectDesc1;
    }


    this.userService.updateParticularRecord(this.varId,this.record).subscribe((res)=>{
      if(res){
        this.isSave=true;
        setTimeout( ()=> {
          this.isSave = false;
       }, 4000);
       window.location.reload();
      }
    });
  }

}
