import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import {UsuarioService} from '../../services/usuario.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
  providers:[UsuarioService]
})
export class CrearUsuarioComponent implements OnInit {
  public title:string;
  public mensaje:String;
  public tipoMensaje:String;
  public showNotification:Boolean=false;
  public createUser:boolean;

  public formUser=new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl('')
  });

  constructor(
    public _usuarioService:UsuarioService
  ) {
    this.title= "Crear usuario";
    this.createUser=true;
  }

  ngOnInit() {
    this.mensaje="";
    this.tipoMensaje="";
  }
  enviar(form:any){
    this.showNotification=true;
    this._usuarioService.saveUser(form.value).subscribe(
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
