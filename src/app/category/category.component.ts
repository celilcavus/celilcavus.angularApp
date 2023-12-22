import { Component } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
title="Kategori Listesi"
categories:Category[]=[
  {id:1,name:"Laptop"},
  {id:2,name:"Bilgisayar"},
  {id:3,name:"iletişim"},
  {id:4,name:"Müzik"},
  {id:5,name:"Elektronik"},
]
}
