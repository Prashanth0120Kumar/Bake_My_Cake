import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../Services/get-products.service';
import { GetBestSellerService } from '../Services/get-best-seller.service';
import { products } from '../Model/products';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit

{
  products:products[]=[];
  bestSeller:products[]=[];
  option :string ='';
  filterProducts:products[]=[];
  constructor(private service:GetProductsService,private bestSellerService:GetBestSellerService){}

  ngOnInit(): void
  {
    this.service.getProducts().subscribe(data=>
      {
        this.products=data;
      });
      // this.bestSellerService.getBestSellers().subscribe(bS=>
      //   {
      //     this.bestSeller=bS;
      //   });
  }
 
  applyFilter(filter: string)
  {
    if (filter === '') {
      this.service.getProducts().subscribe(b => {
        this.products = b;
      });
    } else {
      this.service.getProducts().subscribe(data => {
        const show = data.filter(cat => cat.category?.includes(filter.toLowerCase()));
        this.products = show;
      });
    }
  }
  
  
  searchProduct(searchText:string)
  {
    if (searchText === '' || !searchText)
    this.service.getProducts().subscribe(data=>{
      this.products=data;})    
      else 
    {
      this.service.getProducts().subscribe(data=>{
        const filteration=data.filter(a =>a.name?.toLowerCase().startsWith(searchText.toLowerCase()))
        this.products=filteration;});
    }
  }
}
