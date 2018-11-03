import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:3000/admin/'

  signin(nombre: string, password: string) {
    return this.http.post(this.uri + 'signin', { Nombre: nombre, password: password})
    .pipe(map(user => {
      if(user){
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return user;
    }));
  }
}
