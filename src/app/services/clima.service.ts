import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url='api.openweathermap.org/data/2.5/weather?&appid=';
  key= 'f930f6925c7aa53fe294daeca53835fb';

  constructor(private http: HttpClient) { }
}
