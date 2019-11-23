import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { AdminmentorComponent } from './adminmentor/adminmentor.component';
import { AdmintrainingComponent } from './admintraining/admintraining.component';
import { AdmintechnologyComponent } from './admintechnology/admintechnology.component';
import { AdminpaymentComponent } from './adminpayment/adminpayment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AdminComponent, AdminuserComponent, AdminmentorComponent, AdmintrainingComponent, AdmintechnologyComponent, AdminpaymentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:'never'}),
    RouterModule.forChild([
      { path: 'admin', component:AdminComponent  ,children:[ { path: 'adminuser', component: AdminuserComponent },
    { path: 'adminmentor', component: AdminmentorComponent }, { path: 'admintechnology', component: AdmintechnologyComponent },
    { path: 'admintraining', component: AdmintrainingComponent }, { path: 'adminpayment', component: AdminpaymentComponent }
     
  ]}
  ])
  ]
})
export class AdminModule { }
