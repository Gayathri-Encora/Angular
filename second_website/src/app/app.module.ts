import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componenet/header/header.component';
import { FooterComponent } from './componenet/footer/footer.component';
import { AboutComponent } from './componenet/about/about.component';
import { ServicesComponent } from './componenet/services/services.component';
import { HomeComponent } from './componenet/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { UserDetalisService } from './service/user-detalis.service';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    HomeComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [UserDetalisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
