import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AltaAlumnos } from "../gestion-alumnos/alta-alumnos/alta-alumnos";
import { GestionAlumnos } from "../gestion-alumnos/gestion-alumnos";

@Component({
  selector: 'app-menu-principal',
  imports: [RouterOutlet, GestionAlumnos],
  templateUrl: './menu-principal.html',
  styleUrl: './menu-principal.css'
})
export class MenuPrincipal {
  option = signal(0);
  unrenderAll(){
    this.option.set(0);
  }
  renderAlumnos() {
    this.option.set(1);
  }

  renderProfesores() {
    this.option.set(2);
  }

  renderEscuelas() {
    this.option.set(3);
  }
}
