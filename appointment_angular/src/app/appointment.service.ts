import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl = 'http://localhost:8080/api/appointments';

  constructor(private http: HttpClient) {}

  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.baseUrl);
  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.baseUrl, appointment);
  }
}
