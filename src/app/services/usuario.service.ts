import {Injectable} from '@angular/core';
@Injectable()

export class UsuarioService{
    //metodos
    constructor(){

    }
    listUser(){}
    getUser(id:number){}
    saveUser(user){}
    updateUser(user){}

    show(){
        return "Hola-servicio";
    }
}