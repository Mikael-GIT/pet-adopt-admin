import { Animal } from './animal.model';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl = 'http://localhost:8080/categorias';

  constructor(private http: HttpClient) { }

  readCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}`);
  }

  getDistance(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/distances');
  }


  readCategoria(id:string): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.baseUrl}/${id}`);
  }

  updateCategory(){
    
  }
}
