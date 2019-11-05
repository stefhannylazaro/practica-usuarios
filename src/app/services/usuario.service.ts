import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Injectable()

export class UsuarioService{
    public url:string
    constructor( public _http:HttpClient){
        this.url="https://reqres.in/";
    }
    listUser():Observable<any>{
       return this._http.get(this.url+"api/users?page=1");
    }

    getUser(id:number):Observable<any>{
        return this._http.get(this.url+"api/users/"+id);
    }
    
    saveUser(user){}
    updateUser(user){}

    show(){
        return "Hola-servicio";
    }
}