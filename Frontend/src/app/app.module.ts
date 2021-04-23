import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VaccineListComponent } from './vaccine-list/vaccine-list.component';
import { VaccineFormComponent } from './vaccine-form/vaccine-form.component';
import { VaccineDetailComponent } from './vaccine-detail/vaccine-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VaccineListComponent,
    VaccineFormComponent,
    VaccineDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
