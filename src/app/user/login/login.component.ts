import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  mouseoverLogin: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(formValue): void{
    this.authService.loginUser(this.userName, this.password)
    this.router.navigate(['events']);
  }

  cancel(): void{
    this.router.navigate(['events']);
  }
}
