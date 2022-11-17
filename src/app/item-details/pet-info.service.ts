import { Animal } from './../home/animal.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetInfoService {

  baseUrl = 'http://localhost:8080/animais';

  constructor(private http: HttpClient) { }

  
  read(id: string): Observable<Animal> {
    console.log(this.http.get<Animal>(`${this.baseUrl}/${id}`));
    return this.http.get<Animal>(`${this.baseUrl}/${id}`);
  }
}
