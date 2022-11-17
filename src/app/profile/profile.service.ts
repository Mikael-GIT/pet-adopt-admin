import { Profile } from './profile.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  getProfileById(id: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.baseUrl}/${id}`);
  }
}
