import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../Models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  path:string="http://localhost:28553/Payment";
  constructor(private _client:HttpClient) { }
  public GetAll():Observable<Payment[]>
  {
    return this._client.get<Payment[]>(this.path+'/GetPayment');
  }
  public Delete(id:number)
      {
    return this._client.delete(this.path+'/DeletePayment/'+id);
      }
}
