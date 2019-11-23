import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { ConfirmpasssDirective } from './confirmpasss.directive';



@NgModule({
  declarations: [AdminloginComponent, AdminsignupComponent, ConfirmpasssDirective],
  imports: [
    CommonModule
  ]
})
export class AdminloginModule { }
