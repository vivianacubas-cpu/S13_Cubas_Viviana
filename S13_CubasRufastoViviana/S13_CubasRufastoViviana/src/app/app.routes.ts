import { Routes } from '@angular/router';
import { Dashboard } from './core/layout/dashboard/dashboard';
import { Inicio } from './features/inicio/inicio';
import { Libros } from './features/libros/libros';
import { Autores } from './features/autores/autores';
import { Prestamos } from './features/prestamos/prestamos';
import { NotFound } from './shared/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '', component: Dashboard, children: [
    { path: 'inicio', component: Inicio, title: 'Inicio | Biblioteca Central' },
    { path: 'libros', component: Libros, title: 'Libros | Biblioteca Central' },
    { path: 'autores', component: Autores, title: 'Autores | Biblioteca Central' },
    { path: 'prestamos', component: Prestamos, title: 'Préstamos | Biblioteca Central' }
  ]},
  { path: '**', component: NotFound, title: 'Página no encontrada' }
];
