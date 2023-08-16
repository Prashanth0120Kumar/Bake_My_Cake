import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { OrderProductsComponent } from './order-products/order-products.component';
import { OrderBestSellerComponent } from './order-best-seller/order-best-seller.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FilterComponent } from './filter/filter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    OrderProductsComponent,
    OrderBestSellerComponent,
    DetailsComponent,
    LoginComponent,
    ViewOrdersComponent,
    FilterComponent,
    PageNotFoundComponent,
    BestSellerComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatExpansionModule






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
