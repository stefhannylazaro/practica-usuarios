import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css'],
  providers: [UsuarioService]
})
export class ListarUsuarioComponent implements OnInit {
  public listaUsuarios:Array<any>;
  constructor(
    private _usuarioService:UsuarioService
  ) {
    this.listaUsuarios=[
      new Usuario("Rosa","Perez","Campos","rosa@mail.com"),
      new Usuario("Rosa","Perez","Campos","rosa@mail.com"),
      new Usuario("Rosa","Perez","Campos","rosa@mail.com"),
      new Usuario("Rosa","Perez","Campos","rosa@mail.com")
    ];
   }

  ngOnInit() {
    //console.log(this._usuarioService.getText());
    this._usuarioService.listUser().subscribe(//este metodo tiene dos funciones callback una recoge el resultado y otra el posible error
      result=>{
        console.log(result.data);
        this.listaUsuarios=result.data;
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
