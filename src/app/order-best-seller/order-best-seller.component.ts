import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../Model/products';
import { OrderingBestSellerService } from '../Services/ordering-best-seller.service';

@Component({
  selector: 'app-order-best-seller',
  templateUrl: './order-best-seller.component.html',
  styleUrls: ['./order-best-seller.component.css']
})
export class OrderBestSellerComponent
{

  bestSeller: products = {
    id: '',
    category: '',
    image: '',
    name: '',
    price: 0,
    rating: '',
    description: '',
  };
  showPlaceOrderCard: boolean = true;

  quantity: number = 0;
  totalAmount: number = 0;
  caname:string=""
  orderSubmitted: boolean = false;
  status:boolean=false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private idService:OrderingBestSellerService,
    private router :Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data) => {
      let id = data.get('id') ?? '';

      this.idService.getSingleBestSeller(id).subscribe((data) => {
        if (data) {
          this.bestSeller = data;
          // this.calculateTotalAmount();
        }
      });
    });
  }
  onQuantityChange(): void {
    this.totalAmount = this.bestSeller.price * this.quantity;
    this.caname=this.bestSeller.name;
  }

  calculateTotalAmount() {
  }
  routing()
  {
    const result = window.confirm('Click On Ok to enter Customer Details'); 
    if (result) {
    this.orderSubmitted = true;
    
    this.showPlaceOrderCard = false;

  }
}

confirm() 
{
    if (!this.status) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
   
    return true;
  }
}
