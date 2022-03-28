import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiKey: string;
  url: string;

  constructor(private http: HttpClient) {
    this.apiKey = '5d2bc807';
    this.url='http://www.omdbapi.com/?apikey=';
  }

  buscarFilme(name: string): Promise<any> {
    return this.http.get(this.url + this.apiKey + '&s=' + name).toPromise()
  }
}
