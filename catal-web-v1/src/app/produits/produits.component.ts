import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CatalogueService} from '../services/catalogue.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  public produits:any;
  public size:number = 5;
  public currentPage:number = 0;
  public totalPages:number;
  public pages:Array<number>;

  constructor(private catService:CatalogueService) { }

  ngOnInit() {
  }

  onGetProduct() {
    this.catService.getProducts(this.currentPage, this.size)
      .subscribe(data => {
        this.totalPages = data["page"].totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.produits = data;
      },error => {
        console.log(error);
      });
  }

  onPageProduct(i) {
    this.currentPage = i;
    this.onGetProduct();
  }
}
