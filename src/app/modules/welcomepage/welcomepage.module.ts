import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomepageComponent } from './welcomepage.component';
import { SignupComponent } from 'src/app/components/signup/signup.component';
import { CreateAccountComponent } from 'src/app/components/create-account/create-account.component';
import { ForgottenComponent } from 'src/app/components/forgotten/forgotten.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { FormsModule,NgForm } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Routes,RouterModule } from "@angular/router";

const routes: Routes = [
  {path:'',component:WelcomepageComponent},
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'create',component:CreateAccountComponent},
  {path:'forgot',component:ForgottenComponent}
];

@NgModule({
  declarations: [
    WelcomepageComponent,
    LoginComponent,
    SignupComponent,
    CreateAccountComponent,
    ForgottenComponent,
    DashboardComponent
  
  ],
  imports: [
    CommonModule,FormsModule,MaterialModule,FlexLayoutModule,RouterModule.forChild(routes)
  ]

})
export class WelcomepageModule {}