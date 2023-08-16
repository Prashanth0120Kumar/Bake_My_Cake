import { Injectable } from '@angular/core';
import { OrderBestSellerComponent } from '../order-best-seller/order-best-seller.component';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BestSellerDeactivationService implements CanDeactivate<OrderBestSellerComponent> {

  constructor() { }
  canDeactivate(
   component:OrderBestSellerComponent,
   currentRoute: ActivatedRouteSnapshot,
   currentState: RouterStateSnapshot,
   nextState: RouterStateSnapshot
   ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
   return component.confirm();
   }
}
