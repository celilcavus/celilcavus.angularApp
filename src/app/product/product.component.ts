import { Component } from '@angular/core';
import { Product } from './product';
import {AlertifyService} from '../services/alertify.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',

})
export class ProductComponent {
  
  constructor(private alertifyServices:AlertifyService)
  {

  }
  name = "Ürün Listesi"
  loremPicsum = "https://picsum.photos/200/200";
  products: Product[] = [
    { id: 1, imageUrl: this.loremPicsum, name: "Laptop", price: 34.000, categoryId: 1, description: "Çok güzel bir laptop", },
    { id: 2, imageUrl: this.loremPicsum, name: "Phone", price: 12.000, categoryId: 2, description: "Çok güzel bir Laptop", },
    { id: 2, imageUrl: this.loremPicsum, name: "Phone", price: 12.000, categoryId: 2, description: "Çok güzel bir Laptop", },
    { id: 2, imageUrl: this.loremPicsum, name: "Phone", price: 12.000, categoryId: 2, description: "Çok güzel bir Laptop", },
    { id: 2, imageUrl: this.loremPicsum, name: "Phone", price: 12.000, categoryId: 2, description: "Çok güzel bir Laptop", },
    { id: 2, imageUrl: this.loremPicsum, name: "Phone", price: 12.000, categoryId: 2, description: "Çok güzel bir Laptop", }
  ]

  addToCart(product:Product){
    
    this.alertifyServices.sucess(`Product failed ${product.name}`);
  }
}
