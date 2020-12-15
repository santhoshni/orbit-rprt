import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrbitLstComponent } from './orbit-lst/orbit-lst.component';

@NgModule({
  declarations: [
    AppComponent,
    OrbitLstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
