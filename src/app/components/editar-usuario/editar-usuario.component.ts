import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import { ActivatedRoute } from "@angular/router";
import { UsuarioService } from "../../services/usuario.service";
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: '../crear-usuario/crear-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  public title:string;
  public createUser:boolean;
  public mensaje:String;
  public tipoMensaje:string;
  public showNotification:Boolean=false;
  public loading:boolean;
  public isError:boolean;
  public formUser=new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private _activatedRoute:ActivatedRoute, private _usuarioService:UsuarioService) {
    this.title= "Editar usuario";
    this.createUser=false;
    this.isError=false;
  }

  ngOnInit() {
    this.mensaje="";
    this.tipoMensaje="";
    console.log("fomulario user init");
    console.log(this.formUser);
    this.loading=true;
    this._activatedRoute.params.subscribe(data=>{
      this.getUserDetail(data.id);//load data user
    });
  }

  enviar(form:any){
    this.showNotification=true;

    this._usuarioService.updateUser(this.formUser.value).subscribe(
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
        this.loading=false;
        this.formUser.setValue({
          first_name:result.data.first_name,
          last_name: result.data.last_name,
          email: result.data.email
        }); 
      },
      (error)=>{
        console.log(<any>error);
        if(error.status==404){
          this.loading=false;
          this.isError=true;
          console.log("error usuario no encontrado");
        } 
      }
    );  
  }
}