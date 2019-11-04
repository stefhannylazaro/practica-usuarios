import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  public title:string;
  public usuario:Usuario;
  public mensaje:String;
  public tipoMensaje:String;
  public showNotification:Boolean=false;
  constructor() {
    this.title= "Crear usuario";
    this.usuario=new Usuario("","","","");
  }

  ngOnInit() {
    this.mensaje="asd";
    this.tipoMensaje="asd";
  }
  enviar(form:any){
    this.showNotification=true;
    this.mensaje="Exito";
    this.tipoMensaje="success";
    setTimeout(()=>{
      this.showNotification=false;
      form.reset();
    },2000);
    console.log(this.usuario);
  }

}
