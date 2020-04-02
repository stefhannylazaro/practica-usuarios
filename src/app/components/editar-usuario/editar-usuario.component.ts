import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import { ActivatedRoute } from "@angular/router";
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: 'app-editar-usuario',
  templateUrl: '../crear-usuario/crear-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  public usuario:Usuario;
  public title:string;
  public createUser:boolean;
  public mensaje:String;
  public tipoMensaje:string;
  public showNotification:Boolean=false;
  public findUser:boolean;

  constructor(private _activatedRoute:ActivatedRoute, private _usuarioService:UsuarioService) {
    this.title= "Editar usuario";
    this.createUser=false;
    this.usuario=new Usuario("","","");
  }

  ngOnInit() {
    this.mensaje="";
    this.tipoMensaje="";
    
    this._activatedRoute.params.subscribe(data=>{
      this.getUserDetail(data.id);//load data user
    });
  }

  enviar(form:any){
    this.showNotification=true;

    this._usuarioService.updateUser(this.usuario).subscribe(
      result=>{
        console.log(result);
        if(result.updatedAt){
          this.mensaje="Usuario editado con exito";
          this.tipoMensaje="success";
          
          setTimeout(()=>{
            this.showNotification=false;
            form.reset();
          },2000);
        }
      },
      error=>{
        this.mensaje="Ocurrió un error";
        this.tipoMensaje="error";
        
      }
    );
  }

  getUserDetail(id:number){
    this._usuarioService.getUser(id).subscribe(
      (result)=>{
        this.usuario=result.data;
        this.findUser=true;
      },
      (error)=>{
        console.log(<any>error);
        if(error.status==404){
          this.findUser=false;
        }
        
      }
    );  
  }
}
