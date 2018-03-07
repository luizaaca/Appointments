import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Appointment } from '../models/appointment';
import 'rxjs/add/operator/map';

@Injectable()
export class AppointmentService {
    constructor(private http: HttpClient) { }

    private headers: HttpHeaders;

    getAppointments(): Observable<Appointment[]> {
        return this.http.get<Appointment[]>("/api/appointments", { headers: this.headers })
            .map(function (data: any[]) {
                var result = new Array<Appointment>();
                data.forEach(function (item) {
                    result.push({
                        id: item.Id,
                        date: new Date(item.Date),
                        length: item.Length,
                        patient: item.Patient
                    });
                })
                return result;
            });
    }
}