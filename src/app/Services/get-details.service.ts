import { Injectable } from '@angular/core';
import { Details } from '../Model/details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetDetailsService
{

  constructor(private http:HttpClient) { }
  details_url: string = " http://localhost:3001/customerDetails";

  getDetails(): Observable<Details[]> 
  {

    return this.http.get<Details[]>(this.details_url);

  }
}
