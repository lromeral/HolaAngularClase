import { Component, OnInit } from '@angular/core';
import { IArticulo } from './articulo.interface';

@Component({
  selector: 'app-form-articulo',
  templateUrl: './form-articulo.component.html',
  styleUrls: ['./form-articulo.component.css']
})
export class FormArticuloComponent implements OnInit {

  public articulo: IArticulo;

  public familias= [
    {value: 'pc', display: 'Ordenadores'},
    {value: 'printer', display:'Impresoras'}
  ];

  constructor() { }

  ngOnInit() {
    this.articulo= {
      nombre:'',
      familia: this.familias[1].value,
      precio:0
    };
  }

}
