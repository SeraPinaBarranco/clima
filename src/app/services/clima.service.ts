import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url='api.openweathermap.org/data/2.5/weather?&appid=';
  key= 'f930f6925c7aa53fe294daeca53835fb';

  constructor(private http: HttpClient) { }

  getClima(ciudad: string):Observable<any>{
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.key}`;
    return this.http.get(url);
  }
}
