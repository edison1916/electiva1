import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.scss']
})
export class EstructuraComponent implements OnInit {
  
  isUsuario = true 

personas: Usuario[] =[

 {id:1, nombre: "juan", apellido: "mediana"},
 {id:2, nombre: "pedro", apellido: "mesa"},
 {id:3, nombre: "sara", apellido: "join"},
 {id:4, nombre: "simon", apellido: "liro"},
 {id:5, nombre: "brayan", apellido: "lopez"},
 

]


  constructor() { }

  ngOnInit(): void {
  }

}
