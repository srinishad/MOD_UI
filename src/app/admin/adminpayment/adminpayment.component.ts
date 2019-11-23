import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/Models/payment';
import { PaymentService } from 'src/app/Service/payment.service';

@Component({
  selector: 'app-adminpayment',
  templateUrl: './adminpayment.component.html',
  styleUrls: ['./adminpayment.component.css']
})
export class AdminpaymentComponent implements OnInit {

  item:Payment;
  list:Payment[];
  msg:string;
  constructor(private _service:PaymentService) { 
    this.item=new Payment();
    this._service.GetAll().subscribe(k=>this.list=k)
   
  }

  ngOnInit() {
  }
  public Delete(Id:number){
    this._service.Delete(Id).subscribe(k=>k=this.msg)
  }

}
