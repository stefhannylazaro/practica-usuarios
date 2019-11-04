import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  public usuario:Usuario;

  constructor(private _route: ActivatedRoute) {
    this.usuario=new Usuario("","","","");
  }

  ngOnInit() {
    this._route.params.subscribe(params=>{
      let id= params.id;
      console.log(id);
      //this.getUsuario(id);
    });
  }

}
