import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainings } from '../Models/trainings';
import { TrainingService } from '../Service/training.service';
import { Mentor } from '../Models/mentor';
import { MentorService } from '../Service/mentor.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {
mentorsName='';
lists:Trainings[];
id:number;
item:Trainings;
items:Mentor;
trainingClick;
  constructor(private router :Router,private _TrService :TrainingService,private _service:MentorService) 
  {
    // this.mentorName=localStorage.getItem('token');
  this.id=+localStorage.getItem('token');
  this.item = new Trainings();
  this.items = new Mentor();
  this.mentorsName = this.items.mentorName;
  this._service.GetMentorById(this.id).subscribe(k=>this.items=k);
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
   public MentorCurTrainings(){
    this._TrService.GetTrainingByMentorId(this.id).subscribe(k=>this.lists=k);
    this.trainingClick=1;
    //this.curtrainingclick=1;
    //this.updatepassclick=0;
  }
  }


