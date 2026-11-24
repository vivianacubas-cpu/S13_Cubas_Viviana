import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
type Loan={id:string;reader:string;book:string;date:string;due:string;status:string;tone:string};
@Component({ selector:'app-prestamos',standalone:true,imports:[CommonModule,FormsModule],templateUrl:'./prestamos.html',styleUrl:'./prestamos.css' })
export class Prestamos {
  showForm=false;editingId:string|null=null;
  form:Loan=this.emptyForm();
  loans:Loan[]=[
    {id:'P-101',reader:'Andrea Torres',book:'La ciudad y los perros',date:'12/11/2026',due:'19/11/2026',status:'Activo',tone:'active'},
    {id:'P-102',reader:'Carlos Mendoza',book:'El principito',date:'10/11/2026',due:'17/11/2026',status:'Por vencer',tone:'warning'},
    {id:'P-103',reader:'Lucía Ramírez',book:'Don Quijote de la Mancha',date:'03/11/2026',due:'10/11/2026',status:'Vencido',tone:'late'},
    {id:'P-104',reader:'Diego Flores',book:'Cien años de soledad',date:'14/11/2026',due:'21/11/2026',status:'Activo',tone:'active'},
    {id:'P-105',reader:'María Sánchez',book:'Tradiciones peruanas',date:'08/11/2026',due:'15/11/2026',status:'Devuelto',tone:'returned'}
  ];
  emptyForm():Loan{return {id:'',reader:'',book:'',date:'',due:'',status:'Activo',tone:'active'};}
  get activeCount(){return this.loans.filter(l=>l.status==='Activo').length;}
  get dueSoonCount(){return this.loans.filter(l=>l.status==='Por vencer').length;}
  get overdueCount(){return this.loans.filter(l=>l.status==='Vencido').length;}
  get returnedCount(){return this.loans.filter(l=>l.status==='Devuelto').length;}
  openNew(){this.editingId=null;this.form=this.emptyForm();this.form.id=`P-${101+this.loans.length}`;this.showForm=true;}
  edit(loan:Loan){this.editingId=loan.id;this.form={...loan};this.showForm=true;}
  save(){if(!this.form.reader.trim()||!this.form.book.trim()||!this.form.date||!this.form.due)return;this.form.tone=this.form.status==='Vencido'?'late':this.form.status==='Por vencer'?'warning':this.form.status==='Devuelto'?'returned':'active';if(this.editingId){const i=this.loans.findIndex(l=>l.id===this.editingId);if(i>=0)this.loans[i]={...this.form};}else this.loans.unshift({...this.form});this.showForm=false;}
  remove(id:string){if(confirm('¿Deseas eliminar este préstamo?'))this.loans=this.loans.filter(l=>l.id!==id);}
}
