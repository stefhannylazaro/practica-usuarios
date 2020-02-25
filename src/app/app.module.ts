import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//para trabajar con formularios
import { routing, appRoutingProviders } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { C404Component } from './components/c404/c404.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';
import { NotificacionComponent } from './components/notificacion/notificacion.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListarUsuarioComponent,
    CrearUsuarioComponent,
    C404Component,
    DetalleUsuarioComponent,
    NotificacionComponent,
    EditarUsuarioComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot() 
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
