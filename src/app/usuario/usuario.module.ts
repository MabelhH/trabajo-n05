import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ContactosComponent } from './contactos/contactos.component';



@NgModule({
  declarations: [
    NavbarComponent,
    InicioComponent,
    NosotrosComponent,
    ServicioComponent,
    ContactosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    ContactosComponent,
    ServicioComponent,
    NosotrosComponent,
    InicioComponent
  ],
})
export class UsuarioModule { }
