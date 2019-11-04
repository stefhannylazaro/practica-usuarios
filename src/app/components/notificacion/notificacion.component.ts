import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss']
})
export class NotificacionComponent implements OnInit {
  @Input() public msg:String;
  @Input() public tipo:String;
  public tipoClase:String;

  constructor() { }

  ngOnInit() {
    console.log(this.tipo);
    switch(this.tipo){
      case "success":
        this.tipoClase="n-success";
        break;
      case "error":
        this.tipoClase="n-error";
        break;
      default:
        this.tipoClase="n-general";
    }
  }

}
