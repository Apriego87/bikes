import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

const baseUrl = 'http://localhost:8080/bikestore/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(baseUrl)
  }

  get(id: any): Observable<Customer> {
    return this.http.get<Customer>(`${baseUrl}/${id}`)
  }

  create(data: any): Observable<Customer> {
    return this.http.post(baseUrl, data)
  }

  update(id: any, data: any): Observable<Customer> {
    return this.http.put(`${baseUrl}/${id}`, data)
  }

  delete(id: any): Observable<Customer> {
    return this.http.delete(`${baseUrl}/${id}`)
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl)
  }
}
