import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  public usuario:Usuario;
  constructor() {
    this.usuario=new Usuario("","","","");
  }

  ngOnInit() {
  }
  enviar(){
    console.log(this.usuario);
  }

}
