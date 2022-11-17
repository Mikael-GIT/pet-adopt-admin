import { Login } from './login.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://localhost:8080/usuarios/access/admin';

constructor(private http: HttpClient) { }

  login(login: Login): Observable<any> {
    return this.http.post<Login>(this.baseUrl, login);
  }
}
