import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import{User}from '../Models/user';
import{Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {


    path:string="http://localhost:28553/User";
      constructor(private _client:HttpClient) { }
      public GetAll():Observable<User[]>
      {
        return this._client.get<User[]>(this.path+'/Getusers');
      }
      public Add(item:User):Observable<string>
      {
        return this._client.post<string>(this.path+'/Add',item);
      }
      public GetUserById(id:number):Observable<User>
      {
        return this._client.get<User>(this.path+'/GetUserById/'+id);
      }
      public Update( email,pwd)
      {
      return this._client.put(this.path+'/Update/'+email+'/'+pwd ,email, pwd);
      }
      public Delete(id:number)
      {
    return this._client.delete(this.path+'/Delete/'+id);
      }
      public Block(id:number)
      {
      return this._client.put(this.path+'/BlockUser/'+id,id);
      }
}
