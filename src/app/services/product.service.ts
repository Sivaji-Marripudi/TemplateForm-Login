import { Injectable } from '@angular/core';
import { Products } from 'src/app/entities/products'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Products[] = [
    new Products(1,'Fastrack Watch','Fastrack Mens Watch.This product is really good',1500,'src/assets/fastrackwatch2.jpeg'),
    new Products(2,'Product 2','This is product 2 description.This product is really good',1000),
    new Products(3,'Product 3','This is product 3 description.This product is really good',100),
    new Products(4,'Product 4','This is product 4 description.This product is really good',500),
    new Products(5,'Product 5','This is product 5 description.This product is really good',600),
    new Products(6,'Product 6','This is product 6 description.This product is really good',1000),
    new Products(7,'Product 7','This is product 7 description.This product is really good',2000),
    new Products(8,'Product 8','This is product 8 description.This product is really good',2500),
    new Products(9,'Product 9','This is product 9 description.This product is really good',200)


  ]
  constructor() { }
  getProducts():Products[] {
    return this.products;
  }
}
