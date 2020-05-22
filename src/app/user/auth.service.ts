import { Injectable } from '@angular/core';
import { IUser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: IUser
  constructor() { }

  loginUser(userName: string, password: string){
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'Papa'
    }
  }

  isAuthenticated(){
    return !!this.currentUser;
  }
}
