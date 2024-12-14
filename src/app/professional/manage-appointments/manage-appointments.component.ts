import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-appointments',
  standalone: true,
  templateUrl: './manage-appointments.component.html',
  imports: [CommonModule]  // Import nécessaire pour *ngFor et autres directives
})
export class ManageAppointmentsComponent {
  appointments = [
    { id: 1, client: 'Jean Dupont', date: '2023-12-10', status: 'En attente' },
    { id: 2, client: 'Marie Durand', date: '2023-12-11', status: 'En attente' }
  ];

  constructor(private router: Router) {}

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
