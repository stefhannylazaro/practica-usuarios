import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//importar componentes
import {HomeComponent} from './components/home/home.component';
import {ListarUsuarioComponent} from './components/listar-usuario/listar-usuario.component';
import {CrearUsuarioComponent} from './components/crear-usuario/crear-usuario.component';
import {DetalleUsuarioComponent} from './components/detalle-usuario/detalle-usuario.component';
import {EditarUsuarioComponent} from './components/editar-usuario/editar-usuario.component';
import {UsuarioComponent} from './components/usuario/usuario.component';
import { LoginComponent } from './components/login/login.component';
import {C404Component} from './components/c404/c404.component';

//Array de rutas
const appRoutes: Routes = [
    {path: '',component:HomeComponent},
    {path: 'login',component:LoginComponent},
    {path: 'home',component:HomeComponent},
    {path: 'usuarios',component:UsuarioComponent,children:[
      {path: '',component:ListarUsuarioComponent},
      {path: 'editar-usuario/:id',component:EditarUsuarioComponent},
      {path: 'detalle-usuario/:id',component:DetalleUsuarioComponent},
    ]},
    {path: 'crear-usuario',component:CrearUsuarioComponent},
    {path: '**',component:C404Component}
  ];

  
//Exportar el modulo del Router
export const appRoutingProviders:any[] = [];//exportamos el servicio del routing
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);