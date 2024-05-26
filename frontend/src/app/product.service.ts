import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Product {
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:4200/api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    debugger;
    return this.http.get<Product[]>(this.apiUrl);
  }

}
