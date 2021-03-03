import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/user.moddel';

@Component({
  selector: 'app-edu-details',
  templateUrl: './edu-details.component.html',
  styleUrls: ['./edu-details.component.css']
})
export class EduDetailsComponent implements OnInit {
  varId:any;
  jrClgName:any;
  isSave=false;
  record = new User;
  
  educationalDetForm = new FormGroup({
    jrCLGDegree: new FormControl(),
    jrCLGName: new FormControl(),
    jrCLGYear: new FormControl(),
    jrCLGGrade: new FormControl(),
    
    postGDegree: new FormControl(),
    postGName: new FormControl(),
    postGYear: new FormControl(),
    postGGrade: new FormControl(),
    
    bachDDegree: new FormControl(),
    bachDName: new FormControl(),
    bachDYear: new FormControl(),
    bachDGrade: new FormControl()
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
  fillEducationalDet(data:any){
    if(this.record.educationDet){
      this.record.educationDet.jrCLGDegree=data.jrCLGDegree
      this.record.educationDet.jrCLGName=data.jrCLGName
      this.record.educationDet.jrCLGYear=data.jrCLGYear
      this.record.educationDet.jrCLGGrade=data.jrCLGGrade
      
      this.record.educationDet.bachDDegree=data.bachDDegree
      this.record.educationDet.bachDName=data.bachDName
      this.record.educationDet.bachDYear=data.bachDYear
      this.record.educationDet.bachDGrade=data.bachDGrade

      this.record.educationDet.postGDegree=data.postGDegree
      this.record.educationDet.postGName=data.postGName
      this.record.educationDet.postGYear=data.postGYear
      this.record.educationDet.postGGrade=data.postGGrade
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