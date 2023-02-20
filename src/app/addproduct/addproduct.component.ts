import { Component, OnInit } from '@angular/core';
import {Product} from "../Core/Models/product";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  product! :Product;
  constructor() { }

  ngOnInit(): void {
    this.product=new Product();
  }

}
