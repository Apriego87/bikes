import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const baseUrl = 'http://localhost:8080/bikestore/products';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(baseUrl)
  }

  getProductsByStore(id: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}?idStore=${id}`)
  }

  searchByName(id: any, name: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}?idStore=${id}&name=${name}`)
  }

  getProductById(id: any): Observable<Product> {
    return this.http.get<Product>(`${baseUrl}/${id}`)
  }

  createProduct(data: any): Observable<Product> {
    return this.http.post(baseUrl, data)
  }

  update(id: any, data: any): Observable<Product> {
    return this.http.put(`${baseUrl}/${id}`, data)
  }

  delete(id: any): Observable<Product> {
    return this.http.delete(`${baseUrl}/${id}`)
  }
}
