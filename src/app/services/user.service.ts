import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  'rxjs/add/operator/map';
import { IUser } from '../shared/user';

import { User } from '../shared/user.moddel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = new User;
  users: User[] = [];

  //readonly baseURL = 'https://resume-v3-builder.herokuapp.com/employees';
  readonly baseURL = 'http://localhost:3000/employees';
  constructor(private http : HttpClient) { }

  getUserList(){
   
    return this.http.get(this.baseURL);
  }
  // doLogin(obj1 : any,obj2 : any){
  //   return this.http.get(this.baseURL+'/login/'+obj1+'/pwd/'+obj2)
  //   };  
  doLogin(obj1 : any,obj2 : any){
    return this.http.get(this.baseURL+'/login/'+obj1+'/pwd/'+obj2)
    }; 
  
    getParticularRecord(id:any){
      return this.http.get(this.baseURL+'/'+id);

    }
    updateParticularRecord(id:string, userObj:User){
      return this.http.put(this.baseURL+'/'+id,userObj);
    }
    postMethod(userObj:User){
      console.log('post ')
      return this.http.post(this.baseURL,userObj);

    }
}
