import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formu',
  templateUrl: './formu.component.html',
  styleUrls: ['./formu.component.css']
})
export class FormuComponent implements OnInit {
  nombre: string;
  apellido: string;
  edad: number;
  constructor() { }

  ngOnInit() {
    this.nombre = '';
    this.apellido = '';
    this.edad = 0;
  }

}