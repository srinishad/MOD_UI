import { Injectable } from '@angular/core';
import { Mentor } from '../Models/mentor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  
  path:string="http://localhost:28553/Mentor";
  constructor(private _client:HttpClient) { }
  public GetAll():Observable<Mentor[]>
  {
    return this._client.get<Mentor[]>(this.path+'/GetMentors');
  }
  public Add(item:Mentor):Observable<string>
  {
    return this._client.post<string>(this.path+'/AddMentor',item);
  }
  public GetMentorById(id:number):Observable<Mentor>
  {
    return this._client.get<Mentor>(this.path+'/GetMentorById/'+id);
  }
  public Update(item:Mentor)
  {
  return this._client.put(this.path+'/Update',item);
  }
  public Delete(id:number)
  {
return this._client.delete(this.path+'/Delete/'+id);
  }
  public Block(id:number)
      {
      return this._client.put(this.path+'/BlockMentor/'+id,id);
      }
}
