import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';


const routes: Routes = [ 
  { path: 'login', component: LoginComponent },
  // other routes...
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // default route
  // catch-all route
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
