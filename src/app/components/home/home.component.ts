import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@HostListener('scroll', ['$event'])
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Hola home");
  }
  onScroll(event: any) {
    // visible height + pixel scrolled >= total height 
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      console.log("Parte final del elem.");
    }
    console.log(event.target.scrollTop);
  }
}
