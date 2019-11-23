import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/Models/technology';
import { TechnologyService } from 'src/app/Service/technology.service';

@Component({
  selector: 'app-admintechnology',
  templateUrl: './admintechnology.component.html',
  styleUrls: ['./admintechnology.component.css']
})
export class AdmintechnologyComponent implements OnInit {

  item:Technology;
  list:Technology[];
  msg:string;
  clickbtn;
  constructor(private _service:TechnologyService) { 
    this.item=new Technology();
    this._service.GetAll().subscribe(k=>this.list=k)
    this.clickbtn=0;
  }

  ngOnInit() {
  }
  public Delete(Id:number){
    this._service.Delete(Id).subscribe(k=>k=this.msg)
  }
  public Add(){
    this._service.Add(this.item).subscribe(k=>this.msg=k)
  }
  public Addclick()
  {
    this.clickbtn=1;
  }
}
