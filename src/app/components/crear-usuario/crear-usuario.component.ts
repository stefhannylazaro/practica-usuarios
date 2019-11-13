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
  constructor(
    public _usuarioService:UsuarioService
  ) {
    this.title= "Crear usuario";
    this.usuario=new Usuario("","","","");
  }

  ngOnInit() {
    this.mensaje="asd";
    this.tipoMensaje="asd";
  }
  enviar(form:any){
    this.showNotification=true;
    /**/
    this._usuarioService.saveUser(this.usuario).subscribe(
      (result)=>{
        if(result.id){
          this.mensaje="Exito";
          this.tipoMensaje="success";
          setTimeout(()=>{
            this.showNotification=false;
            form.reset();
          },2000);
        }
        console.log(result);
      },
      (error)=>{

      }
    );
  }
  

}
