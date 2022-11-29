import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = "http://localhost:8096/"
  constructor(private httpClient: HttpClient) { }
  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`+'allproducts');
  }
 
  createProduct(product: Product): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+'addproduct', product);
  }
  getProductById(id:number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}${id}`);
  }
  updateProduct(id: number,product:Product):Observable<object>{
    return this.httpClient.put(`${this.baseURL}${id}`, product);
  }
  deleteProduct(id: number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}${id}`);
  }
}
// deleteEmployee(id: number): Observable<Object>{
//   return this.httpClient.delete(`${this.baseURL}/${id}`);
// }
