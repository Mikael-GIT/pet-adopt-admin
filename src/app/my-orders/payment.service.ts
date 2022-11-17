import { Payment } from './payment.model';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl = 'http://localhost:8080/process_payment';

constructor(private http: HttpClient) { }

  pay(payment: any, user_id:string): Observable<Payment> {
    return this.http.post<Payment>(`${this.baseUrl}/${user_id}`, payment);
  }
}
