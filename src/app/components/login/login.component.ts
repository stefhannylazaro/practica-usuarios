import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formLogin = new FormGroup({
    userName: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    userPass: new FormControl('',Validators.required)
 });
  constructor() { }

  ngOnInit() {
  }

  getErrorUserName(){
    return this.formLogin.get('userName').hasError('required')? 'Usuario requerido' :
            this.formLogin.get('userName').hasError('email') ? 'Formato incorrecto':''
  }

  iniciar(form:any){
    console.log(this.formLogin);
    
  }
}
