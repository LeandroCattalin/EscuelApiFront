import { Routes } from '@angular/router';
import { MenuPrincipal } from './menu-principal/menu-principal';
import { GestionAlumnos } from './gestion-alumnos/gestion-alumnos';

export const routes: Routes = [
    { path: '', redirectTo: '/menu-principal', pathMatch: 'full' },
    { path: 'menu-principal', component: MenuPrincipal },
    { path: 'alumnos', component: GestionAlumnos }
];