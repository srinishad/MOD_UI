import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingService } from '../Service/training.service';
import { Trainings } from '../Models/trainings';
import { User } from '../Models/user';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
usersName='';
lists:Trainings[];
id:number;
item:Trainings;
items:User;
trainingClick;
userEmail;
userPassword;
  constructor(private router :Router,private _TrService :TrainingService,private _service:UserService) {
   // this.userName=localStorage.getItem('token');
   this.trainingClick=0;
   this.id=+localStorage.getItem('token');
   this.item = new Trainings();
   this.items = new User();
   this.usersName = this.items.userName;
   this._service.GetUserById(this.id).subscribe(k=>this.items=k);
   }

   ngOnInit() {
    if(localStorage.getItem('token')==null)
    {
      this.router.navigate(['userlogin']);
    }
 
 
 }
 logout(){
   localStorage.removeItem('token');
   this.router.navigate(['userlogin']);
 
   }
   public UserCurTrainings(){
    this._TrService.GetTrainingByUserId(this.id).subscribe(k=>this.lists=k);
    this.trainingClick=1;
    //this.updatepassclick=0;
  }
  public Update()
{
  this._service.Update(this.userEmail, this.userPassword).subscribe();
}  
}
