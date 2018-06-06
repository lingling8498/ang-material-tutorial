import { Component } from '@angular/core';
import { Screenshot } from './models/screenshots.model';
import { DataService } from './data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //spaceScreens: Array<Screenshot> = [];
  spaceScreens$: Observable<Array<Screenshot>>;
  constructor(private _service: DataService){

  }

  getSpaceScreens(): void {
    //this.spaceScreens = this._service.spaceScreens;
    this.spaceScreens$ = this._service.getData();
  }
}
