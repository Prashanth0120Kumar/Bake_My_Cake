import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderBestSellerComponent } from './order-best-seller/order-best-seller.component';
import { OrderProductsComponent } from './order-products/order-products.component';
import { AuthenticationService } from './Services/authentication.service';
import { LoginComponent } from './login/login.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { DeactivationService } from './Services/deactivation.service';
import { BestSellerDeactivationService } from './Services/best-seller-deactivation.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes =
[
  { path:'', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'bestsellers/:id', component: OrderBestSellerComponent,canDeactivate:[BestSellerDeactivationService] },
  { path:'products/:id', component: OrderProductsComponent,canDeactivate:[DeactivationService] },
  {path:'login',component:LoginComponent},
  {path:"order",component:ViewOrdersComponent,canActivate:[AuthenticationService]},
  {path:'**',component:PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
