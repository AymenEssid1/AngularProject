import { Component, OnInit } from '@angular/core';
import { Product } from '../Core/Models/product';
import {ProductServiceService} from "../services/product-service.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title : string ="welcome";
  listProduct!:Product[];
  priceMax!:number;

  constructor(private serviceProduct :ProductServiceService) {
  }


  ngOnInit(): void {
    this.listProduct=
  }

  buy(i:number){
    if (this.listProduct[i].quantity>0)
    {this.listProduct[i].quantity=this.listProduct[i].quantity-1;}
  }
  like(i:number){
    this.listProduct[i].like=this.listProduct[i].like+1;
  }

}
