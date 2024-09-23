import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment.model';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService, private router: Router) {}

  ngOnInit(): void {
    this.loadAllAppointments();
  }

  loadAllAppointments(): void {
    this.appointmentService.getAllAppointments().subscribe(
      (data: Appointment[]) => {
        this.appointments = data;
      },
      (error: any) => {
        console.error('Error fetching appointments', error);
      }
    );
  }

  createAppointment(): void {
    this.router.navigate(['/appointments/new']); // Navigate to the appointment creation form
  }
}
