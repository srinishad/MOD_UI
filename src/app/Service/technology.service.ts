import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainings } from '../Models/trainings';
import { Technology } from '../Models/technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  path:string="http://localhost:28553/Skills";
  constructor(private _client:HttpClient) { }
  public GetAll():Observable<Technology[]>
  {
    return this._client.get<Technology[]>(this.path+'/GetSkills');
  }
  public Add(item:Technology):Observable<string>
      {
        return this._client.post<string>(this.path+'/AddSkills',item);
      }
      public Update(item:Technology)
      {
      return this._client.put(this.path+'/UpdateSkills',item);
      }
      public Delete(id:number)
      {
    return this._client.delete(this.path+'/DeleteSkills/'+id);
      }
}
