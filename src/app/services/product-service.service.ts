import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({ providedIn: "root" })
export class ProductServiceService {

  constructor(private _httpclient: HttpClient) { }
  path = "http://localhost:3000/products"

  getProducts(categoryName: string): Observable<Product[]> {
    let newPath = this.path;
    if (categoryName) {
      newPath = newPath + "products?category=" + categoryName;
    }
    return this._httpclient.get<Product[]>(newPath).pipe(tap(data => console.log(JSON.stringify(data))), catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    let errormessage = '';
    if (error.error instanceof ErrorEvent) {
      errormessage = 'Bir Hata Oluştu' + error.message;
    }
    else {
      errormessage = `Error message :  ${error.message}, status code: ${error.status}`;
    }
    return throwError(errormessage);
  }

}
