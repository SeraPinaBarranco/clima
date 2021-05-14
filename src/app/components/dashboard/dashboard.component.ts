import { Component, OnInit } from '@angular/core';

import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  urlImagen= "https://image.flaticon.com/icons/png/512/1116/1116453.png";
  ciudad= "";
  temperatura=0;
  humedad=0;
  clima='';
  query=false;
  loading=false;
  mostrarError= false;
  posteriores= false;
  datos: any=[];

  //Propiedades dias posteriores
  tempPost='';
  presionPost= 0;

  minimizar="https://www.flaticon.com/authors/icongeek26";

  constructor(private _clima: ClimaService) { }

  ngOnInit(): void {
  }

  obtenerClima(){
    this.query=false;
    this.loading= true;
    this._clima.getClima(this.ciudad).subscribe(data => {
      this.query=true;
      this.loading=false;
      this.temperatura= data.main.temp -273;
      this.humedad= data.main.humidity;
      this.clima= data.weather[0].main;

    }, error=>{
      this.loading=false;
      this.error();
    });

  }
  error(){
    this.mostrarError=true;
    setTimeout(() => {
      this.mostrarError=false;
      this.ciudad= '';
    }, 3000);
  }

  diasPosteriores(){
    this.posteriores= true;
    

    this._clima.getClimaPosterior(this.ciudad).subscribe(data=>{
      console.log(data.list[0].weather[0].description);
      
      this.datos= data.list;
      //console.log(typeof(this.datos));
      //this.tempPost = data.list[0].main.temp;

      //this.presionPost= data.list[0].main.pressure;
      //console.log(this.datos);
    })
  }

  ocultarDiasPosteriores(){
    this.posteriores=false;
  }
}
