import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from 'src/model/Supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierHttpService {

  apiRoot = 'http://localhost:8080/learn/api/suppliers'

  constructor(private http: HttpClient) { }

  getSuppliers(): Observable<Supplier[]>{
    return this.http.get<Supplier[]>(this.apiRoot)
  }

  add(formValues: Supplier): Observable<Supplier>{
    return this.http.post<Supplier>(this.apiRoot, formValues);
  }
}
