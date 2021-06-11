import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  currentProducts = null;
  message = '';

  constructor(private productsService: ProductsService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(){
    this.message = '';
    this.getProducts(this.route.snapshot.paramMap.get('id'));
  }

  getProducts(id) {
    this.productsService.get(id)
      .subscribe(
        data => {
          this.currentProducts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status) {
    const data = {
      title: this.currentProducts.title,
      description: this.currentProducts.description,
      published: status
    };

    this.productsService.update(this.currentProducts.id, data)
      .subscribe(
        response => {
          this.currentProducts.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateProduct() {
    this.productsService.update(this.currentProducts.id, this.currentProducts)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteProduct() {
    this.productsService.delete(this.currentProducts.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tutorials']);
        },
        error => {
          console.log(error);
        });
  }
}
