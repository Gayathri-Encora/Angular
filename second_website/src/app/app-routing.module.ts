import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './componenet/about/about.component';
import { ServicesComponent } from './componenet/services/services.component';
import { HeaderComponent } from './componenet/header/header.component';
import { FooterComponent } from './componenet/footer/footer.component';
import { HomeComponent } from './componenet/home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  
  {
    path:"about",component:AboutComponent
  },
  {
    path:"service",component:ServicesComponent
  },
  {
    path:"footer",component:FooterComponent
  },
  {
    path:"header",component:HeaderComponent
  },
  {
    path:'',component:HomeComponent
  },
  {
    path:'register',component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
