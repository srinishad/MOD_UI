import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { ConfirmpassDirective } from './confirmpass.directive';



@NgModule({
  declarations: [UserloginComponent, UsersignupComponent,  ConfirmpassDirective],
  imports: [
    CommonModule
  ]
})
export class UserloginModule { }
