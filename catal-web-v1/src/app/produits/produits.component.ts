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
  private currentKeyword: string = "";

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
    this.chercherProduits();
  }

  onChercher(form: any) {
    this.currentPage = 0;
    this.currentKeyword = form.keyword;
    this.chercherProduits();
  }

  chercherProduits() {
    this.catService.getProductsByKeyword(this.currentKeyword, this.currentPage, this.size)
      .subscribe(data => {
        this.totalPages = data["page"].totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.produits = data;
      },error => {
        console.log(error);
      });
  }

  onDeleteProduct(p) {
    let conf = confirm("Êtes-vous sûre ?");
    if(conf) {
      this.catService.deleteResource(p._links.self.href)
        .subscribe(data => {
          this.chercherProduits();
        },error => {
          console.log(error);
        });
    }
  }
}
