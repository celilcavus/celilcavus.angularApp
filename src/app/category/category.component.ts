import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  constructor(private _category: CategoryService) {

  }
  title = "Kategori Listesi"

  categories: Category[] = [];
  ngOnInit(): void {
    this._category.getCategory().subscribe(data => { this.categories = data }); 
    
  }




}
