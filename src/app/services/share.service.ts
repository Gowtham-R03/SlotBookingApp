import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  user:User = new User();
  login:any;

  constructor() { }

  setUser(data:any){
    this.user.userId=data;
  }

  getUser(){
    return this.user;
  }

  setLogin(data:any){
  this.login=data;
  }

  getLogin(){
    return this.login;
  }
}
