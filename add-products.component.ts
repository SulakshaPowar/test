import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'ngx-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  products = {
    name: '',
    description: '',
    slug: ' ',
    image: ' ',
    status: ' '
  };
  submitted = false;
  
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }
  saveProduct() {
    const data = {
      title: this.products.name,
      description: this.products.description,
      slug: this.products.slug,
      image: this.products.image,
      status: this.products.status
    };

    this.productsService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProducts() {
    this.submitted = false;
    this.products = {
      name: '',
      description: '',
      slug: ' ',
      image: ' ',
      status: ' '
    };
  }
}