import { Cadastro } from './cadastro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl = 'http://localhost:8080/usuarios';

constructor(private http: HttpClient) { }

  create(cadastro: Cadastro): Observable<any> {
    return this.http.post<Cadastro>(this.baseUrl, cadastro);
  }
}
