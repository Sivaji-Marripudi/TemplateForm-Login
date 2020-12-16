import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/entities/contact';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  contact : Contact;
  constructor(public rtr:Router){ 
    this.contact = new Contact()  
  }
  onSubmit(loginForm:NgForm){
    console.log(loginForm)
  }
}
  

