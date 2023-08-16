import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../Model/products';
import { OrderingProductsService } from '../Services/ordering-products.service';

@Component({
  selector: 'app-order-products',
  templateUrl: './order-products.component.html',
  styleUrls: ['./order-products.component.css']
})
export class OrderProductsComponent implements OnInit {
  
  product: products = {
    id: '',
    category: '',
    image: '',
    name: '',
    price: 0,
    rating: '',
    description: '',
  };

  quantity: number = 1;
  totalAmount: number = 0;
  caname:string=""

  datatopost: any = {
    quantity: this.quantity,
    totalAmount: this.totalAmount
  };
  orderSubmitted: boolean = false;
  status :boolean=false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private idService:OrderingProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data) => {
      const id = data.get('id') ?? '';

      this.idService.getSingleProduct(id).subscribe((data) => {
        if (data) {
          this.product = data;
          this.calculateTotalAmount();
        }
      });
    });
  }

  onQuantityChange(): void {
    this.calculateTotalAmount();
  }

  calculateTotalAmount() {
    this.totalAmount = this.product.price * this.quantity;
    this.caname=this.product.name;
  }

  routing()
  {
    this.datatopost.quantity = this.quantity;
    this.datatopost.totalAmount = this.totalAmount;
    
  
    const result = window.confirm('Click On OK to Enter Customer Details');
    if (result) {
      this.orderSubmitted = true;
      
    }
  }
  confirm() 
    {
        if (!this.status) {
          return confirm('Do you really want to leave?');
        }
        return true;
      }
}

