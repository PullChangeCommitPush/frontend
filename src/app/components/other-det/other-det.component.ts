import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user.moddel';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-other-det',
  templateUrl: './other-det.component.html',
  styleUrls: ['./other-det.component.css']
})
export class OtherDetComponent implements OnInit {
  isSave = false;
  varId:any;
  record = new User;

  otherDetForm = new FormGroup({
    skillSet: new FormControl(),
    languages: new FormControl(),
    hobbies: new FormControl()
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
      });
    }
  }
  doLogout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  fillOtherDet(data:any){
    var str = data.skillSet;
    var str_array = str.toString().split(',');

    var strLang = data.languages;
    var strLang_array = strLang.toString().split(',');

    var strHob = data.hobbies;
    var strHob_array = strHob.toString().split(',');

    var skillArray = new Array;
    var langArray = new Array;
    var hobArray = new Array;

    for(var i = 0; i < str_array.length; i++) {
      str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
      skillArray[i]=str_array[i];
   }
   for(var i = 0; i < strLang_array.length; i++) {
    strLang_array[i] = strLang_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
    langArray[i]=strLang_array[i];
 }
 for(var i = 0; i < strHob_array.length; i++) {
  strHob_array[i] = strHob_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
  hobArray[i]=strHob_array[i];
}
  if(this.record.skills){
    this.record.skills=skillArray;
  }
  if(this.record.languages){
    this.record.languages=langArray;
  }
  if(this.record.hobbies){
    this.record.hobbies=hobArray;
  }
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
