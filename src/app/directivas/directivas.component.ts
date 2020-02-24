import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  logo: string;
  ingrediente:string;
  ingredientes: string[] = [
    'Huevos',
    'Aceite',
    'Sal'
  ];

  constructor() { }

  ngOnInit() {
  }

  agregarIngrediente() {
    this.ingredientes.push(this.ingrediente);
  }
}