import { Component, OnInit,Input } from '@angular/core';
import { Products } from 'src/app/entities/products'
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor() { }
  @Input() productItem:Products
  ngOnInit(): void {
  }

}
