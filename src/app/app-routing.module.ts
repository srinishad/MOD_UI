import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './userlogin/usersignup/usersignup.component';
import { UserComponent } from './user/user.component';
import { MentorComponent } from './mentor/mentor.component';
import { AdminComponent } from './admin/admin.component';
import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
import { MentorsignupComponent } from './mentorlogin/mentorsignup/mentorsignup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsignupComponent } from './adminlogin/adminsignup/adminsignup.component';
import { SearchComponent } from './search/search.component';
import { AdminuserComponent } from './admin/adminuser/adminuser.component';
import { AdminmentorComponent } from './admin/adminmentor/adminmentor.component';
import { AdminpaymentComponent } from './admin/adminpayment/adminpayment.component';
import { AdmintrainingComponent } from './admin/admintraining/admintraining.component';
import { AdmintechnologyComponent } from './admin/admintechnology/admintechnology.component';



const routes: Routes = [
  {path:'userlogin',component:UserloginComponent},
  {path:'usersignup',component:UsersignupComponent},
  {path:'user',component:UserComponent},
  {path:'mentor',component:MentorComponent},
  {path:'admin',component:AdminComponent},
  {path:'mentorlogin',component:MentorloginComponent},
  {path:'mentorsignup',component:MentorsignupComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminsignup',component:AdminsignupComponent},
  {path:'search',component:SearchComponent},
  {path:'adminuser',component:AdminuserComponent},
  {path:'adminmentor',component:AdminmentorComponent},
  {path:'admintechnology',component:AdmintechnologyComponent},
  {path:'admintraining',component:AdmintrainingComponent},
  {path:'adminpayment',component:AdminpaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
