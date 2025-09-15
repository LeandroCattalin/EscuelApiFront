import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { AltaAlumnos } from './alta-alumnos/alta-alumnos';
import { ModAlumnos } from './mod-alumnos/mod-alumnos';
import { BajaAlumnos } from './baja-alumnos/baja-alumnos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-alumnos',
  standalone: true,
  imports: [AltaAlumnos, ModAlumnos, BajaAlumnos],
  templateUrl: './gestion-alumnos.html',
  styleUrls: ['./gestion-alumnos.css']
})
export class GestionAlumnos {
  option = signal(0);
  renderMenuAlta() {
    this.option.set(1);
  }

  renderMenuMod() {
    this.option.set(2);
  }

  renderMenuBaja() {
    this.option.set(3);
  }

  constructor(private router: Router) {}
  goTo(route: string) {
    this.router.navigate([route]);
  }
}