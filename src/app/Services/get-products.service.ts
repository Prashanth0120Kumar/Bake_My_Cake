import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { products } from '../Model/products';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService
{
  constructor(private httpClient: HttpClient) { }
 
  product_url:string="http://localhost:3000/products";
 
  getProducts():Observable<products[]>
  {
    return this.httpClient.get<products[]>(this.product_url);
  }

}
