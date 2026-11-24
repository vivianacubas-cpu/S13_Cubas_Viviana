import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({ selector: 'app-inicio', standalone: true, imports: [CommonModule, RouterLink], templateUrl: './inicio.html', styleUrl: './inicio.css' })
export class Inicio {
  stats = [
    { label: 'Libros registrados', value: '1,248', note: '+8.2% este mes', icon: '▤', tone: 'blue' },
    { label: 'Préstamos activos', value: '86', note: '12 vencen esta semana', icon: '⇄', tone: 'violet' },
    { label: 'Autores', value: '324', note: '15 nuevos registros', icon: '♙', tone: 'orange' },
    { label: 'Libros disponibles', value: '1,162', note: '93% del catálogo', icon: '✓', tone: 'green' }
  ];
  recent = [
    { title: 'Cien años de soledad', author: 'Gabriel García Márquez', category: 'Novela', status: 'Disponible', tone: 'green', code: 'L-001' },
    { title: 'La ciudad y los perros', author: 'Mario Vargas Llosa', category: 'Literatura', status: 'Prestado', tone: 'orange', code: 'L-002' },
    { title: 'El principito', author: 'Antoine de Saint-Exupéry', category: 'Fábula', status: 'Disponible', tone: 'green', code: 'L-003' },
    { title: 'Los ríos profundos', author: 'José María Arguedas', category: 'Novela', status: 'Disponible', tone: 'green', code: 'L-004' }
  ];
}
