import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsOverviewComponent } from './components/forms-overview/forms-overview.component';
import { SingleFormComponent } from './components/single-form/single-form.component';
import { CandidateService } from './services/candidate-service/candidate.service';
import { FormService } from './services/form-service/form.service';

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
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    CandidateService,
    FormService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
