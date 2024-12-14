import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookAppointmentComponent } from './client/book-appointment/book-appointment.component';
import { ManageAppointmentsComponent } from './professional/manage-appointments/manage-appointments.component';
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'book-appointment', component: BookAppointmentComponent },
  { path: 'manage-appointments', component: ManageAppointmentsComponent }
];
