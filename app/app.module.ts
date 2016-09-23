import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//angular 2 material modules
import { MdButtonModule } from "@angular2-material/button";
import { MdCardModule } from "@angular2-material/card";
import { MdTabsModule } from "@angular2-material/tabs";

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

// import { InMemoryBackendService } from 'angular2-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';

import './rxjs-extensions';
import { AppComponent } from './app.component/app.component';
import { routing, routedComponents } from './app.routing';
import { SessionTableComponent } from './session-table.component/session-table.component';
import { VisualComponent } from './visual.component/visual.component';
import { ApiService } from './api.service/api.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    MdButtonModule.forRoot(),
    MdCardModule.forRoot(),
    MdTabsModule.forRoot()
  ],
  declarations: [
    AppComponent,
    routedComponents,
    SessionTableComponent,
    VisualComponent
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
