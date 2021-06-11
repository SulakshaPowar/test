import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'ngx-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent implements OnInit {

  products: any;
  currentProducts = null;
  currentIndex = -1;
  name = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.retrieveProducts();
  }

  retrieveProducts() {
    this.productsService.getAll()
      .subscribe(
        data => {
          this.products = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveProducts();
    this.currentProducts = null;
    this.currentIndex = -1;
  }

  setActiveProducts(tutorial, index) {
    this.currentProducts = tutorial;
    this.currentIndex = index;
  }

  removeAllProducts() {
    this.productsService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveProducts();
        },
        error => {
          console.log(error);
        });
  }

  searchName() {
    this.productsService.findByTitle(this.name)
      .subscribe(
        data => {
          this.products = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}