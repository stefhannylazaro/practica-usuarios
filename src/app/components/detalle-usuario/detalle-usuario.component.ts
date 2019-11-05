import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css'],
  providers:[UsuarioService]
})
export class DetalleUsuarioComponent implements OnInit {
  public usuario:Usuario;

  constructor(private _route: ActivatedRoute, public _usuarioService:UsuarioService) {
    //this.usuario=new Usuario("","","","");
  }

  ngOnInit() {
    this._route.params.subscribe(params=>{
      let id= params.id;
      this.getUserDetail(id);
    });
  }
  getUserDetail(id:number){
    this._usuarioService.getUser(id).subscribe(
      (result)=>{
        console.log(result);
        this.usuario=result;//usuario por id
      },
      (error)=>{
        
      }
    );  
  }

}
