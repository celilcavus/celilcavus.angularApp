import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../category/category';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _httpclient: HttpClient) { }
  path = "http://localhost:3000/category"

  getCategory(): Observable<Category[]> {
    return this._httpclient.get<Category[]>(this.path).pipe(tap(data => console.log(JSON.stringify(data))), catchError(this.handleError));
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
