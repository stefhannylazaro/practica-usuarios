import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//importar componentes
import {HomeComponent} from './components/home/home.component';
import {ListarUsuarioComponent} from './components/listar-usuario/listar-usuario.component';
import {CrearUsuarioComponent} from './components/crear-usuario/crear-usuario.component';
import {DetalleUsuarioComponent} from './components/detalle-usuario/detalle-usuario.component';
import {C404Component} from './components/c404/c404.component';

//Array de rutas
const appRoutes: Routes = [
    {path: '',component:HomeComponent},
    {path: 'home',component:HomeComponent},
    {path: 'usuarios',component:ListarUsuarioComponent},
    {path: 'crear-usuario',component:CrearUsuarioComponent},
    {path: 'detalle-usuario',component:DetalleUsuarioComponent},
    {path: '**',component:C404Component}
  ];

  
//Exportar el modulo del Router
export const appRoutingProviders:any[] = [];//exportamos el servicio del routing
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);