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

  constructor(private catService:CatalogueService) { }

  ngOnInit() {
  }

  onGetProduct() {
    this.catService.getProducts()
      .subscribe(data => {
        this.produits = data;
      },error => {
        console.log(error);
      });
  }
}
