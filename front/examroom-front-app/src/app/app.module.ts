import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsOverviewComponent } from './components/forms-overview/forms-overview.component';
import { SingleFormComponent } from './components/single-form/single-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsOverviewComponent,
    SingleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
