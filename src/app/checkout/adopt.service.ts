import { Observable } from 'rxjs';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdoptService {

  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  updateProfile(user: User): Observable<User> {
    user.id = "1";
    return this.http.put<User>(`${this.baseUrl}/usuarios`, user);
  }

  adopt(adoptionData){
    return this.http.post<User>(`${this.baseUrl}/adocao`, adoptionData);
  }

}
