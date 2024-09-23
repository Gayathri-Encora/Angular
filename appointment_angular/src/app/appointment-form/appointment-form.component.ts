import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment.model';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {
  appointment: Appointment = new Appointment();

  constructor(private appointmentService: AppointmentService, private router: Router) {}

  // This method will be called when the form is submitted
  onSubmit(): void {
    if (!this.appointment.appointmentDate) {
      alert("Appointment date is required!");
      return;
    }

    this.appointmentService.createAppointment(this.appointment).subscribe(
      () => {
        console.log('Appointment created successfully!');
        this.router.navigate(['/appointments']); // Navigate back to the appointment list
      },
      (error) => {
        console.error('Error creating appointment', error);
      }
    );
  }
}
