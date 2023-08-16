import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { OrderProductsComponent } from '../order-products/order-products.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeactivationService implements CanDeactivate<OrderProductsComponent> {

    constructor() { }
    canDeactivate(
     component:OrderProductsComponent,
     currentRoute: ActivatedRouteSnapshot,
     currentState: RouterStateSnapshot,
     nextState: RouterStateSnapshot
     ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
     return component.confirm();
     }
 }

