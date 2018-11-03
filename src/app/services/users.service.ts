import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient) { }

  uri = 'http://localhost:3000/users/';

  getAllUsers() {
    return this.http.get(this.uri);
  }

  getUserById(id) {
    return this.http.get(this.uri + id);
  }

}
