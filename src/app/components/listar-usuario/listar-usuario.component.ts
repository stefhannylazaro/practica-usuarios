import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import {UsuarioService} from '../../services/usuario.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css'],
  providers:[UsuarioService]
})
export class ListarUsuarioComponent implements OnInit {
  public listaUsuarios:Array<any>;
  constructor(
    private _usuarioService:UsuarioService,
    private spinnerService: Ng4LoadingSpinnerService
  ) {

    // this.listaUsuarios=[
    //   new Usuario("Rosa","Perez","Campos","rosa@mail.com"),
    //   new Usuario("Rosa","Perez","Campos","rosa@mail.com"),
    //   new Usuario("Rosa","Perez","Campos","rosa@mail.com"),
    //   new Usuario("Rosa","Perez","Campos","rosa@mail.com")
    // ];
   }

  ngOnInit() {
    this.spinnerService.show();//mostrar loading
    this._usuarioService.listUser().subscribe(
      (result)=>{
        this.listaUsuarios=result.data;
        this.spinnerService.hide();//esconder loading
      },
      (error)=>{console.log(<any>error)}
    );
  }
}
