import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
// import { Login } from '../login/login';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { Http,Response } from '@angular/http';
import { User } from '../shared/user.model';
import { from } from 'rxjs';
import { getDefaultService } from 'selenium-webdriver/edge';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,private _router: Router, private http : Http) { }

  ngOnInit() {
    // this.userService.getUserList();
  }

  async onSubmit(form : NgForm){
    // console.log(form.value);
    await this.userService.getUser(form.value);
    let item = JSON.parse(localStorage.getItem('login'));
    // console.log(JSON.parse(localStorage.getItem('login')));
    console.log(item);
  }
}
