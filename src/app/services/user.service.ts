import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://reqres.in/api';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.url}/api/users?page=6`);
  }
}
