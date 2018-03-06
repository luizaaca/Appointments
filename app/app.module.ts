import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentService } from './service/appointments.service';

@NgModule({
    imports: [BrowserModule, HttpClientModule], 
    providers: [AppointmentService],
    declarations: [AppComponent, AppointmentsComponent], 
    bootstrap: [AppComponent]
})
export class AppModule { }
