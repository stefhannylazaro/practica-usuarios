import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { UserLoginI } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url_api:string;
  constructor( private _http:HttpClient) {
    this.url_api='https://reqres.in/';
  }
  headers:HttpHeaders= new HttpHeaders({
    "Content-Type":"application/json"
  });

  // registerUser(nombre:string, apellidoP:string, apellidoM:string, email:string){
  //   return this._http.post(this.url_api+'Users',{
  //     nombre:nombre,
  //     apellidoP:apellidoP,
  //     apellidoM: apellidoM,
  //     email:email
  //   },{headers:this.headers})
  // }

  loginUser(user:UserLoginI):Observable<any>{
    let params=JSON.stringify(user);
    // return this._http.post("http://127.0.0.1:8000/api/usuario/login",params,{headers:this.headers});
    return this._http.post("https://reqres.in/api/login",params,{headers:this.headers});
  }

  setUser(user){
    localStorage.setItem('currentUser',JSON.stringify(user))
  }

  getCurrentUser(){
    let user_string=localStorage.getItem('currentUser');
    if(!isNullOrUndefined(user_string)){
      return JSON.parse(user_string);
    } else {
      return null;
    }
  }

  logoutUser(){
    localStorage.removeItem('currentUser');
  }
}
