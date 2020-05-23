import { Injectable } from '@angular/core';
import { IUser } from './iuser';
import { last } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  updateCurrentUser(firstName: string, lastName: string): void {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  public currentUser: IUser
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
