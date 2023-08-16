import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { products } from '../Model/products';

@Injectable({
  providedIn: 'root'
})
export class GetBestSellerService {

  constructor(private httpClient: HttpClient) { }

  bestSeller_url: string = "http://localhost:3000/bestSeller";

  getBestSellers(): Observable<products[]> 
  {

    return this.httpClient.get<products[]>(this.bestSeller_url);

  }
}
