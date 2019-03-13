import { Injectable } from '@angular/core';
import {User} from '../shared/user.model';
import {Login} from '../shared/login.model';
import { from } from 'rxjs';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { NgForm } from '@angular/forms';
import { Body } from '@angular/http/src/body';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser : User;
  users: User[];
  public selectUser : Login = new Login();
  logUser : User;

  constructor(private http: Http) { }

  postUser(user : User){
    var body = JSON.stringify(user);
    var headerOptions = new Headers({'Content-Type': 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:52118/api/user/',body,requestOptions).map(x => x.json());
  }
  getUserList(){
    this.http.get('http://localhost:52118/api/user')
    .map(( data: Response) => {
      return data.json() as User[]
    }).toPromise().then(x => {
      this.users = x;
    })
  }
  getUser(userLog : Login){
    let test;
    let test_data = [];
    var headerOptions = new Headers({'Content-Type' : 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Get,headers : headerOptions});

    return this.http.get('http://localhost:52118/api/user'+ "/?email=" + this.selectUser.UserEmail + "&pass=" + this.selectUser.Password,requestOptions)
    .map(( data : Response) => {
      return data.json() as Login
    }).toPromise().then(x =>  {
      this.selectUser = x;
      // console.log(this.selectUser);
      localStorage.setItem('login',JSON.stringify(this.selectUser));
    })
  }  

}
