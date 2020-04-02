import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
  providers:[UsuarioService]
})
export class CrearUsuarioComponent implements OnInit {
  public title:string;
  public usuario:Usuario;
  public mensaje:String;
  public tipoMensaje:String;
  public showNotification:Boolean=false;
  public createUser:boolean;
  constructor(
    public _usuarioService:UsuarioService
  ) {
    this.title= "Crear usuario";
    this.createUser=true;
    this.usuario=new Usuario("","","");
  }

  ngOnInit() {
    this.mensaje="";
    this.tipoMensaje="";
  }
  enviar(form:any){
    this.showNotification=true;

    this._usuarioService.saveUser(this.usuario).subscribe(
      (result)=>{
        if(result.id){
          this.mensaje="Usuario registrado con exito";
          this.tipoMensaje="success";
          setTimeout(()=>{
            this.showNotification=false;
            form.reset();
          },2000);
        }
      },
      (error)=>{
        this.mensaje="Usuario no registrado, ocurrió un error.";
        this.tipoMensaje="error";
      }
    );
  }  

}
