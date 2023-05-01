import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { UserService } from './user.service';
import { NgxSliderModule } from '@angular-slider/ngx-slider';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   HttpClientModule,
  ReactiveFormsModule,
  NgxSliderModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
