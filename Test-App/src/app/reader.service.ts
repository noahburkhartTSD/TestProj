import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ReaderService {

  constructor(private http: HttpClient) { }
  getLinks() {
    return this.http.get<Array<string>>('http://127.0.0.1:5000/links/')
  }
  getTitle() {
    return this.http.get('http://127.0.0.1:5000/string/', {responseType: 'text'})
  }
  getCardVals() { 
    return this.http.get<Array<String>>('http://127.0.0.1:5000/strings/')
  }
}
