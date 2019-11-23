import { Component, OnInit } from '@angular/core';
import { Mentor } from '../Models/mentor';
import { SearchService } from '../Service/search.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  item:Mentor;
  list:Mentor[];
  skills:string;
  constructor(private _service : SearchService, private http: HttpClient) { }

  ngOnInit() {
  }
  public Search()
  {
    this._service.SearchMentor(this.skills).subscribe(k=>{
      this.list=k;
      console.log(k)
    });
   

}

}
