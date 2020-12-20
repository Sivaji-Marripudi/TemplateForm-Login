import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/entities/products';
import { ProductService } from 'src/app/services/product.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public productsrvc:ProductService) { }
  productList:Products[]

  ngOnInit(): void {
    this.productList = this.productsrvc.getProducts()
  }

}
