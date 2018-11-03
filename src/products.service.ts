import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:3000/products/';

  getAllProducts() {
    return this.http.get(this.uri);
  }

  getProductById(id) {
    return this.http.get(this.uri + id);
  }

  addProduct(product){
    this.http.post(this.uri, product).subscribe(res => {
      return res;
    });
  }
}
