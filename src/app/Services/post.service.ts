import { Injectable } from '@angular/core';
import { Details } from '../Model/details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private post_url = 'http://localhost:3001/customerDetails'; 

  constructor(private http: HttpClient) { }

  addCustomerOrder(order: Details): Observable<Details> {
    return this.http.post<Details>(this.post_url, order);
  }

  // get():Observable<Details>{
  //   return this.http.get<Details>(this.post_url);
  // }
}
