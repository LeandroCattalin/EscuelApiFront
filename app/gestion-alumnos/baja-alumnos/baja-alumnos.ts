import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-baja-alumnos',
  standalone: true,
  imports: [],
  templateUrl: './baja-alumnos.html',
  styleUrls: ['./baja-alumnos.css']
})
export class BajaAlumnos {
  baja = signal(false)
  bajaAlumno() {
    this.baja.set(true)
  }
}
