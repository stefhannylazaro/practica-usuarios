import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {UserI} from '../../models/user';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[AuthService]
})
export class HeaderComponent implements OnInit {
  public userC:UserI;
  constructor(private _authService:AuthService) { }

  ngOnInit() {
    this.userC=this._authService.getCurrentUser();
    console.log("headet init");
    console.log(this.userC);
  }
  onLogout():void{
    this._authService.logoutUser();
    this._authService.isLogged=false;
    location.reload();
  }
}
