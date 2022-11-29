import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseURL = "http://localhost:8096/"
  constructor(private httpClient: HttpClient) { }
 
  getFeedBackList(): Observable<Feedback[]>{
    return this.httpClient.get<Feedback[]>(`${this.baseURL}`+'allfeedback')
  }
  createFeedback(feedback: Feedback): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+'feedback', feedback)
  }
  getFeedBackById(id:number): Observable<Feedback>{
    return this.httpClient.get<Feedback>(`${this.baseURL}getfeedback/${id}`);
  }
  updatefeedback(id:number,feedback:Feedback):Observable<object>{
    return this.httpClient.put(`${this.baseURL}${id}`,feedback);
  }
}
// getProductById(id:number): Observable<Product>{
//   return this.httpClient.get<Product>(`${this.baseURL}${id}`);
// }
// updateProduct(id: number,product:Product):Observable<object>{
//   return this.httpClient.put(`${this.baseURL}${id}`, product);
// }