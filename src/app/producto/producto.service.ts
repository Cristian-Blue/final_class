import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http : HttpClient) {}
  
  baseUrl = "https://api.escuelajs.co/api/v1/products";
 
  getAll() : Observable<any>{
    return this.http.get(this.baseUrl)
  }

  getOne(id : string){
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  postProducto(){

  }

  putProducto(){

  }

  deleteProducto(){

  }


}
