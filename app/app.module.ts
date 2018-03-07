import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppointmentsComponent } from './appointments/appointments.component';

import { AppointmentService } from './service/appointments.service';

@NgModule({
    imports: [BrowserModule, HttpClientModule, AppRoutingModule],
    providers: [AppointmentService, { provide: APP_BASE_HREF, useValue: '/' }],
    declarations: [LoginComponent, AppComponent, AppointmentsComponent], 
    bootstrap: [AppComponent]
})
export class AppModule { }
