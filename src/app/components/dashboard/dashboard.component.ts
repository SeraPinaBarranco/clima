import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  urlImagen= "https://image.flaticon.com/icons/png/512/1116/1116453.png";
  ciudad= "";
  constructor() { }

  ngOnInit(): void {
  }

  obtenerClima(){
    console.log(this.ciudad);
  }
}
