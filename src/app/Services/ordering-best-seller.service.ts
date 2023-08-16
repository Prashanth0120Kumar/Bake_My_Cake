import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { products } from '../Model/products';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderingBestSellerService
{
  private bestSellerUrl: string = "http://localhost:3000/bestSeller";
  constructor(private http:HttpClient) { }
  getSingleBestSeller(id: string): Observable<products | undefined>
  {
    return this.http.get<products>(`${this.bestSellerUrl}/${id}`);
  }
}
