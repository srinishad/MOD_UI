import { Injectable } from '@angular/core';
import { Trainings } from '../Models/trainings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  path:string="http://localhost:28553/Training";
  constructor(private _client:HttpClient) { }
  public GetAll():Observable<Trainings[]>
  {
    return this._client.get<Trainings[]>(this.path+'/GetTrainings');
  }
  public Add(item:Trainings):Observable<string>
  {
    return this._client.post<string>(this.path+'/Add',item);
  }
  public Search(id:number):Observable<Trainings>
      {
        return this._client.get<Trainings>(this.path+'/GetById/'+id);
      }
  public Update(item:Trainings)
  {
  return this._client.put(this.path+'/Update',item);
  }
  public Delete(id:number)
  {
return this._client.delete(this.path+'/DeleteTraining/'+id);
  }
  public GetTrainingByUserId(id:number):Observable<Trainings[]>
  {
   return this._client.get<Trainings[]>(this.path+'/GetTrainingByUserId/'+id);
  }
  public GetTrainingByMentorId(id:number):Observable<Trainings[]>
  {
   return this._client.get<Trainings[]>(this.path+'/GetTrainingByMentorId/'+id);
  }
}
