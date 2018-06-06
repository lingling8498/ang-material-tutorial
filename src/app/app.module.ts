
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { MaterialModule } from './material.module';
import 'hammerjs';

import {map} from 'rxjs/operators';

import { AppComponent } from './app.component';
import { Screenshot } from './models/screenshots.model';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    //HttpModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  //https://www.youtube.com/watch?v=m_jBxPn-rcU&t=367s
  
  // spaceScreens: Array<Screenshot>;

  // constructor(private _http:HttpClient){
    
  //   this._http.get<Array<Screenshot>>('./data.json')
  //   .subscribe(response => this.spaceScreens = response);
  //     // Call map on the response observable to get the parsed people object
  //     //.pipe(map(response => response.json().screenshots))
  //     // Subscribe to the observable to get the parsed people object and attach it to the
  //     // component
  //     //.subscribe(res => this.spaceScreens = res);
  // }

  

}
