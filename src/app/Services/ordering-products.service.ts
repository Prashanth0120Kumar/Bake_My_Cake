import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { products } from '../Model/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OrderingProductsService
{
  private productUrl: string = "http://localhost:3000/products";
  constructor(private http:HttpClient) { }
  getSingleProduct(id: string): Observable<products | undefined>
  {
    return this.http.get<products>(`${this.productUrl}/${id}`);
  }
}
