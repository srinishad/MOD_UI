import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorloginComponent } from './mentorlogin.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { ConfirmpassssDirective } from './confirmpassss.directive';




@NgModule({
  declarations: [MentorloginComponent, MentorsignupComponent, ConfirmpassssDirective],
  imports: [
    CommonModule
  ]
})
export class MentorloginModule { }
