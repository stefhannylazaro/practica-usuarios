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
  public usuario:any;
  public loading:boolean;
  public isError:boolean;
  constructor(private _route: ActivatedRoute, public _usuarioService:UsuarioService) {
    this.isError=false;
  }

  ngOnInit() {
    this.loading=true;
    this._route.params.subscribe(params=>{
      let id= params.id;
      this.getUserDetail(id);
    }); 
  }
  getUserDetail(id:number){
    this._usuarioService.getUser(id).subscribe(
      (result)=>{
        this.loading=false;
        this.usuario=result.data;//usuario por id
      },
      (error)=>{
        console.log(<any>error);
        if(<any>error.status==404){
          this.loading=false;
          this.isError=true;
        }
      }
    );  
  }

}
