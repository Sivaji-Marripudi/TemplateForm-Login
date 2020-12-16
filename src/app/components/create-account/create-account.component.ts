import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Create } from 'src/app/entities/create';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  hide:boolean = true;
  signup:Create;
  constructor() { 
    this.signup = new Create()
  }

  ngOnInit(): void {
  }
  onSubmit(signupForm:NgForm){
    console.log(signupForm)
  }

}
