import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from '../models/staff.model';

const baseUrl = 'http://localhost:8080/bikestore/staff'

@Injectable({
  providedIn: 'root'
})

export class StaffService {

  constructor(private http: HttpClient) { }

  getStaffByStore(id: any): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${baseUrl}?idStore=${id}`)
  }

  getStaffById(id: any): Observable<Staff> {
    return this.http.get<Staff>(`${baseUrl}/${id}`)
  }

  create(data: any): Observable<Staff> {
    return this.http.post<Staff>(baseUrl, data)
  }

  update(id: any, data: any): Observable<Staff> {
    return this.http.put(`${baseUrl}/${id}`, data)
  }

  delete(id: any): Observable<Staff> {
    return this.http.delete(`${baseUrl}/${id}`)
  }

  findByName(id: any, surname: any): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${baseUrl}?idStore=${id}&surname=${surname}`);
  }
}
