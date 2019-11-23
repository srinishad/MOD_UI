import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MentorModule } from './mentor/mentor.module';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MentorComponent } from './mentor/mentor.component';
import { UsersignupComponent } from './userlogin/usersignup/usersignup.component';
import { AdminComponent } from './admin/admin.component';
import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
import { MentorsignupComponent } from './mentorlogin/mentorsignup/mentorsignup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsignupComponent } from './adminlogin/adminsignup/adminsignup.component';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmailValidatorDirective } from './email-validator.directive';
import { PasswordValidatorDirective } from './password-validator.directive'
import { ConfirmpassDirective } from './userlogin/confirmpass.directive';
import { ConfirmpasssDirective } from './adminlogin/confirmpasss.directive';
import { ConfirmpassssDirective } from './mentorlogin/confirmpassss.directive';
import { SearchComponent } from './search/search.component';
import { AdminModule } from './admin/admin.module';
import { AdminmentorComponent } from './admin/adminmentor/adminmentor.component';
import { AdminuserComponent } from './admin/adminuser/adminuser.component';
import { AdminpaymentComponent } from './admin/adminpayment/adminpayment.component';
import { AdmintechnologyComponent } from './admin/admintechnology/admintechnology.component';
import { AdmintrainingComponent } from './admin/admintraining/admintraining.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MentorComponent,
    UserloginComponent,
    UsersignupComponent,
    // AdminComponent,
    MentorloginComponent,
    MentorsignupComponent,
    AdminloginComponent,
    AdminsignupComponent,
    EmailValidatorDirective,
    PasswordValidatorDirective,
    ConfirmpassDirective,
    ConfirmpasssDirective,
    ConfirmpassssDirective,
    SearchComponent,
    // AdminuserComponent,
    // AdminpaymentComponent,
    // AdmintechnologyComponent,
    // AdminmentorComponent,
    // AdmintrainingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:'never'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
