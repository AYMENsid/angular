import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importez CommonModule

@Component({
  selector: 'app-manage-appointments',
  standalone: true,
  templateUrl: './manage-appointments.component.html',
  styleUrls: ['./manage-appointments.component.css'],
  imports: [CommonModule] // Ajoutez CommonModule ici
})
export class ManageAppointmentsComponent {
  appointments = [
    { id: 1, client: 'ahmed', date: '2024-06-14', status: 'En attente' },
    { id: 2, client: 'samir', date: '2024-06-15', status: 'En attente' }
  ];

  confirmAppointment(id: number) {
    const appointment = this.appointments.find(a => a.id === id);
    if (appointment) {
      appointment.status = 'Confirmé';
      alert(`Le rendez-vous avec ${appointment.client} a été confirmé.`);
    }
  }

  cancelAppointment(id: number) {
    this.appointments = this.appointments.filter(a => a.id !== id);
    alert(`Le rendez-vous a été annulé.`);
  }
}
