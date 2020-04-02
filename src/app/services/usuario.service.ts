//va a permitir inyectar nuestro servicio como dependencia en otras clases y en otros componentes
import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable({
    providedIn: 'root'
})

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
        //return this._http.get(this.url+"api/users/"+id,{observe: 'response'});
        //agrego el  parametro observe si quiero acceder a algo mas que el body, por ejemplo el header-- http://blog.enriqueoriol.com/2017/11/httpclient-vs-http-angular.html
    }
    
    saveUser(user):Observable<any>{
        let params=JSON.stringify(user);
        return this._http.post(this.url+"api/users",params);
    }
    updateUser(user):Observable<any>{
        let params=JSON.stringify(user);
        return this._http.put(this.url+"api/users/"+user.id,params);
    }

    show(){
        return "Hola-servicio";
    }
}
