import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsOverviewComponent } from './components/forms-overview/forms-overview.component';
import { SingleFormComponent } from './components/single-form/single-form.component';

const routes: Routes = [
   {path: '', component: FormsOverviewComponent},
   {path: 'forms-overview', component: FormsOverviewComponent},
   {path: 'single-form', component: SingleFormComponent},
  // //URL NOT FOUND -> redirect to home page -> forms-overview
  {path: '**' , redirectTo : ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
