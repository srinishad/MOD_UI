import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserService } from 'src/app/Service/user.service';
import { User } from 'src/app/Models/user';
@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {
  item:User;
list:User[];
msg:string;
  constructor(private _service:UserService) {
    this.item=new User();
 
   }
 
  ngOnInit() {
  }
  public Add(){
    this.item.userActive=true;
    this._service.Add(this.item).subscribe(k=>this.msg=k)
  }
 
  
}

 

