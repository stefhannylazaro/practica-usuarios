import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
@Component({
  selector: 'app-editar-usuario',
  templateUrl: '../crear-usuario/crear-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  public usuario:Usuario;
  public title:string;
  constructor() {
    this.title= "Editar usuario";
  }

  ngOnInit() {
    this.usuario=new Usuario("","","","");//
  }

}
