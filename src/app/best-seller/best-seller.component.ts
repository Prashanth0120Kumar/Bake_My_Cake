import { Component, OnInit } from '@angular/core';
import { products } from '../Model/products';
import { GetBestSellerService } from '../Services/get-best-seller.service';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent implements OnInit
{
  bestSeller:products[]=[];
  constructor(private bestSellerService:GetBestSellerService){}
  ngOnInit(): void
  {
    this.bestSellerService.getBestSellers().subscribe(bS=>
      {
        this.bestSeller=bS;
      });
  }

}
