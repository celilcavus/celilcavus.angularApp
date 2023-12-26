import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { ProductServiceService } from '../services/product-service.service';
import { catchError, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',

})
export class ProductComponent implements OnInit {
  name = "Ürün Listesi"
  constructor(private alertifyServices: AlertifyService, private _product: ProductServiceService, private _activetedRoute: ActivatedRoute) {

  }

  products: Product[] = [];
  ngOnInit(): void {
    this._activetedRoute.params.subscribe(params => {this._product.getProducts(params["name"]).subscribe(data => { this.products = data }) })
    
  }

  addToCart(product: Product) {

    // this.alertifyServices.sucess(`Product failed ${product.name}`);
  }
  
}
