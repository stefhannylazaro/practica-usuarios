//va a permitir inyectar nuestro servicio como dependencia en otras clases y en otros componentes
import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Injectable()

export class UsuarioService{
    public url:string;
    constructor(
        public _http:HttpClient
    ){ 
        this.url="https://reqres.in/";
    }
    listUser():Observable<any>{
        return this._http.get(this.url+'api/users?page=1');
    }
    getUser(userId){}
    saveUser(user){}
    updateUser(user){}
    getText(){
        return "Hola mundo - servicio"
    }
}
