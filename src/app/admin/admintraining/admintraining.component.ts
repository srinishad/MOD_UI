import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/Service/training.service';
import { Trainings } from 'src/app/Models/trainings';

@Component({
  selector: 'app-admintraining',
  templateUrl: './admintraining.component.html',
  styleUrls: ['./admintraining.component.css']
})
export class AdmintrainingComponent implements OnInit {

  item:Trainings;
  list:Trainings[];
  msg:string;
  constructor(private _service:TrainingService) { 
    this.item=new Trainings();
    this._service.GetAll().subscribe(k=>this.list=k)
   
  }

  ngOnInit() {
  }
  public Delete(Id:number){
    this._service.Delete(Id).subscribe(k=>k=this.msg)
  }

}
