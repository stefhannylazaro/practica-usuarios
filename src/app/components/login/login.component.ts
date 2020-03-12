import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {UserI, UserLoginI} from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
  private user:UserI;

  public formLogin= new FormGroup({
    userName: new FormControl(''),
    userPass: new FormControl('',Validators.required)
 });
  constructor(private _authService:AuthService,private _router:Router) { }

  ngOnInit() {
  }

  getErrorUserName(){
    return this.formLogin.get('userName').hasError('required')? 'Usuario requerido' :
            this.formLogin.get('userName').hasError('email') ? 'Formato incorrecto':''
  }

  onLogin(form:any){
    console.log(this.formLogin.value);
    let user:UserLoginI={
      email:this.formLogin.value.userName,
      password:this.formLogin.value.userPass
    }
    this._authService.loginUser(user).subscribe(
      result=>{
        console.log(result);
        // if(!result.responser.length){
          //logueado-data test response
          let infoUser={
            id:1,
            name:"Lorena Perez",
            email:"lore@gmail.com"
          }
          this._authService.setUser(infoUser);
          this._authService.isLogged=true;
          console.log("esta logueado???");
          console.log(this._authService.isLogged);
          this._router.navigate(['/home']);

        // } else {
        //   this._authService.isLogged=false;
        // }
      },
      error=>{
        console.log(error.error)
      }
    );
  }
}
