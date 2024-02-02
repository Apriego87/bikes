import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../models/store.model';

const baseUrl = 'http://localhost:8080/bikestore/stores';

@Injectable({
  providedIn: 'root'
})

export class StoreServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Store[]> {
    return this.http.get<Store[]>(baseUrl);
  }

  get(id: any): Observable<Store> {
    return this.http.get<Store>(`${baseUrl}/${id}`)
  }

  create(data: any): Observable<Store> {
    return this.http.post(baseUrl, data)
  }

  update(id: any, data: any): Observable<Store> {
    return this.http.put(`${baseUrl}/${id}`, data)
  }

  delete(id: any): Observable<Store> {
    return this.http.delete(`${baseUrl}/${id}`)
  }

  findByName(name: any): Observable<Store[]> {
    return this.http.get<Store[]>(`${baseUrl}?name=${name}`);
  }
}
