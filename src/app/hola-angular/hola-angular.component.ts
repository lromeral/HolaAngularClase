import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-hola-angular',
  templateUrl: "./hola-angular.component.html",
  styleUrls: ["./hola-angular.component.css"]
})
export class HolaAngularComponent implements OnInit {
  titulo: string;
  rutaImagen: string;
  estadoBoton: boolean;
  aprendiz: string;
  ocultarImagen: boolean;
  srcImagen: string;
  activarImagen: boolean;

  constructor() {}

  ngOnInit() {
    this.titulo = 'Ejemplo de binding en Angular';
    this.rutaImagen = 'https://angular.io/assets/images/logos/angular/angular.png';
    this.estadoBoton = true;
    this.ocultarImagen = false;
    this.aprendiz = '';
    this.srcImagen='';
    this.activarImagen= true;


  }

  cambiarEstadoBoton() {
    this.estadoBoton = !this.estadoBoton;
  }

  muestraOcultaImagen() {
    this.ocultarImagen = !this.ocultarImagen;
  }

  activarDesactivarImagen(){
    this.activarImagen =! this.activarImagen;
  }
}