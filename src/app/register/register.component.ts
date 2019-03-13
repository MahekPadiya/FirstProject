import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.reset();
    this.userService.selectedUser = {
      id: null,
      Name: '',
      // LastName: '',
      email: '',
      gender: 'false',
      role: 'false',
      password: ''
    }
  }
  onSubmit(form : NgForm){
    this.userService.postUser(form.value)
    .subscribe( data => {
      this.resetForm(form);
    })
  }

}
