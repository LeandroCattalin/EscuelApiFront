import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-mod-alumnos',
  standalone: true,
  imports: [],
  templateUrl: './mod-alumnos.html',
  styleUrls: ['./mod-alumnos.css']
})
export class ModAlumnos {
  found = signal(0);
  founded() {
    this.found.set(1);
  }
}
