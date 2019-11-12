import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private httpClient:HttpClient) { }

  public getProducts(){
    return this.httpClient.get("http://localhost:8080/produits");
  }
}
