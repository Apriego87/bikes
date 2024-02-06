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
  name = '';
  storeID = this.route.snapshot.queryParams['id'];
  storeName = this.route.snapshot.queryParams['name'];

  constructor(private productService: ProductServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.productService.getProductsByStore(this.storeID)
      .subscribe({
        next: (data) => {
          this.products = data;
          console.log(data)
        },
        error: (e) => console.error(e)
      })
  }

  searchByName(): void {
    this.currentIndex = -1;

    console.log(this.storeID)

    this.productService.searchByName(this.storeID, this.name)
      .subscribe({
        next: (data) => {
          this.products = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
