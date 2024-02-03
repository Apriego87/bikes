import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-detailed-stores',
  templateUrl: './detailed-stores.component.html',
  styleUrl: './detailed-stores.component.css'
})
export class DetailedStoresComponent implements OnInit {
  products?: Product[];
  currentIndex = -1;
  id = -1;

  constructor(private productService: ProductServiceService, private route: ActivatedRoute) {
    const name = this.route.snapshot.queryParams['name'];
    console.log(`Name: ${JSON.stringify(name)}`);
  }

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.productService.getProducts()
      .subscribe({
        next: (data) => {
          this.products = data;
          console.log(data)
        },
        error: (e) => console.error(e)
      })
  }
/* 
  searchName(): void {
    this.currentIndex = -1;

    this.productService.getProductById(this.id)
      .subscribe({
        next: (data) => {
          this.products = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  } */
}
