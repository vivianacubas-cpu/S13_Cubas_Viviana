import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
type Author={initials:string;name:string;country:string;books:number;genre:string};
@Component({ selector:'app-autores',standalone:true,imports:[CommonModule,FormsModule],templateUrl:'./autores.html',styleUrl:'./autores.css' })
export class Autores {
  showForm=false; editingName:string|null=null;
  form:Author=this.emptyForm();
  authors:Author[]=[
    {initials:'GG',name:'Gabriel García Márquez',country:'Colombia',books:8,genre:'Realismo mágico'},
    {initials:'MV',name:'Mario Vargas Llosa',country:'Perú',books:12,genre:'Novela'},
    {initials:'JA',name:'José María Arguedas',country:'Perú',books:6,genre:'Literatura andina'},
    {initials:'AS',name:'Antoine de Saint-Exupéry',country:'Francia',books:4,genre:'Fábula'},
    {initials:'MC',name:'Miguel de Cervantes',country:'España',books:5,genre:'Clásico'},
    {initials:'RP',name:'Ricardo Palma',country:'Perú',books:9,genre:'Tradición'}
  ];
  emptyForm():Author{return {initials:'',name:'',country:'',books:0,genre:''};}
  openNew(){this.editingName=null;this.form=this.emptyForm();this.showForm=true;}
  edit(a:Author){this.editingName=a.name;this.form={...a};this.showForm=true;}
  save(){if(!this.form.name.trim()||!this.form.country.trim())return;this.form.initials=this.form.name.split(' ').slice(0,2).map(x=>x[0]).join('').toUpperCase();if(this.editingName){const i=this.authors.findIndex(a=>a.name===this.editingName);if(i>=0)this.authors[i]={...this.form};}else this.authors.unshift({...this.form});this.showForm=false;}
  remove(name:string){if(confirm('¿Deseas eliminar este autor?'))this.authors=this.authors.filter(a=>a.name!==name);}
}
