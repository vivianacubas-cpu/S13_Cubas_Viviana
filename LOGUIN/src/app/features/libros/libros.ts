import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Book = { code:string; title:string; author:string; category:string; year:number; status:string };
@Component({ selector: 'app-libros', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './libros.html', styleUrl: './libros.css' })
export class Libros {
  search = ''; showForm = false; editingCode: string | null = null;
  form: Book = this.emptyForm();
  books: Book[] = [
    { code:'L-001', title:'Cien años de soledad', author:'Gabriel García Márquez', category:'Novela', year:1967, status:'Disponible' },
    { code:'L-002', title:'La ciudad y los perros', author:'Mario Vargas Llosa', category:'Literatura', year:1963, status:'Prestado' },
    { code:'L-003', title:'El principito', author:'Antoine de Saint-Exupéry', category:'Fábula', year:1943, status:'Disponible' },
    { code:'L-004', title:'Los ríos profundos', author:'José María Arguedas', category:'Novela', year:1958, status:'Disponible' },
    { code:'L-005', title:'Don Quijote de la Mancha', author:'Miguel de Cervantes', category:'Clásico', year:1605, status:'Prestado' },
    { code:'L-006', title:'Tradiciones peruanas', author:'Ricardo Palma', category:'Historia', year:1872, status:'Disponible' }
  ];
  emptyForm(): Book { return { code:'', title:'', author:'', category:'Novela', year:new Date().getFullYear(), status:'Disponible' }; }
  get filteredBooks() { const q=this.search.toLowerCase(); return this.books.filter(b => `${b.title} ${b.author} ${b.category} ${b.code}`.toLowerCase().includes(q)); }
  get availableCount() { return this.books.filter(b => b.status === 'Disponible').length; }
  get borrowedCount() { return this.books.filter(b => b.status === 'Prestado').length; }
  openNew() { this.editingCode=null; this.form=this.emptyForm(); this.form.code=`L-${String(this.books.length+1).padStart(3,'0')}`; this.showForm=true; }
  edit(book: Book) { this.editingCode=book.code; this.form={...book}; this.showForm=true; }
  save() { if (!this.form.title.trim() || !this.form.author.trim()) return; if (this.editingCode) { const i=this.books.findIndex(b=>b.code===this.editingCode); if(i>=0) this.books[i]={...this.form}; } else { this.books.unshift({...this.form}); } this.showForm=false; }
  remove(code:string) { if(confirm('¿Deseas eliminar este libro?')) this.books=this.books.filter(b=>b.code!==code); }
}
