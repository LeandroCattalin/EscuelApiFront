import { Component, signal } from '@angular/core';
import { UserProfile } from './models/user.profile';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('primera-practica-angular');
  userProfile = new UserProfile('Tibu');
}