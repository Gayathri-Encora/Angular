import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/appointments', pathMatch: 'full' }, // Redirect root path to appointments
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'appointments/new', component: AppointmentFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
