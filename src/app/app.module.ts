import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HolaAngularComponent } from './hola-angular/hola-angular.component';
import { FormsModule } from '@angular/forms';
import { DirectivasComponent } from './directivas/directivas.component';
import { FormuComponent } from './formu/formu.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormArticuloComponent } from './form-articulo/form-articulo.component';



@NgModule({
  declarations: [
    AppComponent,
    HolaAngularComponent,
    DirectivasComponent,
    FormuComponent,
    FormularioComponent,
    FormArticuloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
