import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SignupComponent,
    LoginComponent
  ],
  exports:[LoginComponent,SignupComponent]
})
export class AuthModule { }
