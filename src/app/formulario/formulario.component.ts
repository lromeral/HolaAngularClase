import { Component, OnInit } from '@angular/core';
import { IUser } from './user.interface';


// Aquí el componente 

// El código visual estará en el archivo app.component.html que luego veremos.
// La clase del componente AppComponent implementa la interface OnInit. 
// Esta interface obliga a incluir el método ngOnInit que inicia el modelo con unos valores por defecto.
// Se exponen varios atributos. El atributo user que será de tipo IUser y otros que van a servir para configurar 
// y dar aspecto a algunos elementos del formulario.
// El método save registrará si el formulario está bien introducido o no.

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: IUser;

  public generos = [
      { value: 'M', display: 'Mujer' },
      { value: 'H', display: 'Hombre' }
  ];
  public roles = [
      { value: 'admin', display: 'Administrador' },
      { value: 'guest', display: 'Invitado' },
      { value: 'custom', display: 'Otro' }
  ];
  public aficiones = [
      { value: 'game', display: 'Gaming' },
      { value: 'tech', display: 'Tecnología' },
      { value: 'life', display: 'Lifestyle' },
  ];

    ngOnInit() {
        // Inicialización del modelo
        this.user = {
            nombre: '',
            genero: this.generos[0].value, // Mujer por defecto
            rol: null,
            activo: false,
            aficiones: [this.aficiones[1].value] // Tecnología por defecto
        }
    }

    save(f: IUser, isValid: boolean) {
        if (!isValid) {
          return;
        }
        console.log(f);
    }
}