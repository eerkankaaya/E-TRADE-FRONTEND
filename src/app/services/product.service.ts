import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModule } from '../modules/listResponseModule';
import { Product } from '../modules/product';
import { ResponseModule } from '../modules/responseModule';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:7160/api/';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModule<Product>> {
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModule<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModule<Product>> {
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModule<Product>>(newPath);
  }

  add(product:Product):Observable<ResponseModule>{
    return this.httpClient.post<ResponseModule>(this.apiUrl+"products/add",product)
  }
}