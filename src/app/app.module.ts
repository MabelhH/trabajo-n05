import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UsuarioModule } from './usuario/usuario.module';

import { RouterModule } from '@angular/router';
import { InicioComponent } from './usuario/inicio/inicio.component';
import { NosotrosComponent } from './usuario/nosotros/nosotros.component';
import { ServicioComponent } from './usuario/servicio/servicio.component';
import { ContactosComponent } from './usuario/contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent, 
    
  ],
  imports: [
    BrowserModule,
    UsuarioModule,
    RouterModule.forRoot([
     {path:'',component:InicioComponent},
     {path:'nosotros',component:NosotrosComponent},
     {path:'servicios',component:ServicioComponent},
     {path:'contactos',component:ContactosComponent},
     {path:'**', redirectTo:'/',pathMatch:'full'}
    ])
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
