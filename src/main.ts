import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { SignupComponent } from './app/signup/signup.component';
import { BookAppointmentComponent } from './app/client/book-appointment/book-appointment.component';
import { ManageAppointmentsComponent } from './app/professional/manage-appointments/manage-appointments.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'book-appointment', component: BookAppointmentComponent },
      { path: 'manage-appointments', component: ManageAppointmentsComponent },
      { path: '**', redirectTo: 'login' }, // Redirection pour les routes inconnues
    ]),
  ],
});
