import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mentor } from '../Models/mentor';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  path: String = "http://localhost:28553/User";
  constructor(private _client : HttpClient) { }
  public SearchMentor(skills:string): Observable<Mentor[]>
  {
    return this._client.get<Mentor[]>(this.path+'/GetMentorBySkill/'+skills);
  }
}
