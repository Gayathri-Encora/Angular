export class Appointment {
    id: number;
    patient_name: string;
    doctor_name: string;
    appointmentDate: string; // Use string for simplicity
    description: string;
    status: string;
    priority: string;
    location: string;
    specialty: string;
  
    constructor(
      id: number = 0,
      patient_name: string = '',
      doctor_name: string = '',
      appointmentDate: string = '',
      description: string = '',
      status: string = '',
      priority: string = '',
      location: string = '',
      specialty: string = ''
    ) {
      this.id = id;
      this.patient_name = patient_name;
      this.doctor_name = doctor_name;
      this.appointmentDate = appointmentDate;
      this.description = description;
      this.status = status;
      this.priority = priority;
      this.location = location;
      this.specialty = specialty;
    }
  }
  