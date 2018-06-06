import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Screenshot } from './models/screenshots.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  spaceScreens: Array<Screenshot> = [];
  apiAddress: string;

  constructor(private _http: HttpClient) { 
    this.apiAddress = './data.json';
    
  }

  getData(): Observable<Array<Screenshot>> {
    return this._http.get<Array<Screenshot>>(this.apiAddress);
    //.subscribe(response => this.spaceScreens = response);

  }
}
