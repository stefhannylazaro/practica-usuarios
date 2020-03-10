import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'py-usuarios';
  public path:string;
  public show:boolean;
  
  constructor(private _router:Router){
    this._router.events.subscribe((result) => {
      this.path=this._router.url.split('/')[1];
      this.show=this.path=="login"? false : true;
    })
  }
}
