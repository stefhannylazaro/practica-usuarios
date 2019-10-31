import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  public listaUsuarios:Array<Usuario>;
  constructor() {
    this.listaUsuarios=[
      new Usuario("Rosa","Perez","Campos","rosa@mail.com"),
      new Usuario("Rosa","Perez","Campos","rosa@mail.com"),
      new Usuario("Rosa","Perez","Campos","rosa@mail.com"),
      new Usuario("Rosa","Perez","Campos","rosa@mail.com")
    ];
   }

  ngOnInit() {
    console.log(this.listaUsuarios);
  }

}
