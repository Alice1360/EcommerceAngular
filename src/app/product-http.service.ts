import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from 'src/model/Product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductHttpService  {

  apiRoot = 'http://localhost:8080/learn'


  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiRoot}/api/products`)
  }

  // submitForm(): Observable<Product[]>{
  //   return this.http.post<Product[]>
  // }

  add(formValues: Product): Observable<Product>{
    return this.http.post<Product>(`${this.apiRoot}/api/products`, formValues);
  }
}
