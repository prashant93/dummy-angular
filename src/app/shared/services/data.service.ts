import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public dataApi:string="";
  
  constructor(private _http:HttpClient) { }

  getData(apiRoot):Observable<Object>{
    this.dataApi = apiRoot;
    return this._http.get(this.dataApi);
  }
}
