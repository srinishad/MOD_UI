import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { Mentor } from 'src/app/Models/mentor';
import { MentorService } from 'src/app/Service/mentor.service';

@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styleUrls: ['./mentorsignup.component.css']
})
export class MentorsignupComponent implements OnInit {
email=new FormControl('',[
  Validators.required,
  Validators.email
]);
item:Mentor;
list:Mentor[];
msg:string;
  constructor(private _service:MentorService) {  this.item=new Mentor();
    this.item.mentorActive=true;
    this.item.mentorAvailability=true;
  }
 
  ngOnInit() {
  }
  public Add(){
    
    this._service.Add(this.item).subscribe(k=>this.msg=k)
    console.log(this.item);
  }
}
