import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../service/appointments.service';
import { Appointment } from '../models/appointment';

@Component({
    selector: 'app-appointments',
    templateUrl: './appointments.component.html'
})
export class AppointmentsComponent implements OnInit {
    constructor(private appointmentService: AppointmentService) { }

    ngOnInit() {
        this.getAppointments();
    }

    title = 'Appointments';
    appointments: Appointment[];

    getAppointments(): void {
        this.appointmentService.getAppointments().subscribe(a => {
            console.log(a);
            console.log(a.length);
            console.log(a[0]);
            console.log(a[1].date instanceof Date);
            this.appointments = a;
        });
    }

}
