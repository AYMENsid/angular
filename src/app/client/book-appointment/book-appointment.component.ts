import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  templateUrl: './book-appointment.component.html',
  imports: [FormsModule, CommonModule]  // Ajoutez CommonModule ici
})
export class BookAppointmentComponent {
  date: string = '';
  selectedProfessional: string = '';
  professionals = ['Dzda', 'hda', 'ahmed'];

  constructor(private router: Router) {}

  bookAppointment() {
    console.log(`Rendez-vous réservé avec ${this.selectedProfessional} pour ${this.date}`);
    alert(`Votre rendez-vous a été réservé avec ${this.selectedProfessional} pour ${this.date}`);
    this.router.navigate(['/']);
  }
}
