import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {
  email=new FormControl('',[
    Validators.required,
    Validators.email
  ]);
  email_id;
password;
repeat_password;
message='';

  constructor(private http:HttpClient) { }
  ngOnInit() {
  }
  submit_form_data(){
    console.log("email_id : " + this.email_id);
    console.log("password : " + this.password);
    console.log("repeat_password : " + this.repeat_password);
  
    var body = "email_id=" + this.email_id 
        + "&password=" + this.password 
        + "&repeat_password=" + this.repeat_password;
  
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  
    this.http.post("http://localhost:3000/admin/", body, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Congratulations, You had successfully registered"
      },
      (error) => {
        console.log(error)
        this.message = "Error : Backend is running? or Registered already?";
      }
    )
  }
  
  
  
}
