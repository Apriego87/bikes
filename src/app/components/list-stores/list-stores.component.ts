import { Component, OnInit } from '@angular/core';
import { Store } from '../../models/store.model';
import { StoreServiceService } from '../../services/store-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-stores',
  templateUrl: './list-stores.component.html',
  styleUrl: './list-stores.component.css'
})
export class ListStoresComponent implements OnInit {
  stores?: Store[];
  currentStore: Store = {};
  currentIndex = -1;
  name = '';

  constructor(private storeService: StoreServiceService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveStores();
  }

  retrieveStores(): void {
    this.storeService.getAll()
      .subscribe({
        next: (data) => {
          this.stores = data;
          console.log(data)
        },
        error: (e) => console.error(e)
      })
  }

  refreshList(): void {
    this.retrieveStores();
    this.currentStore = {};
    this.currentIndex = -1;
  }

  setActiveStore(store: Store, index: number): void {
    this.currentStore = store;
    this.currentIndex = index;
  }

  searchName(): void {
    this.currentStore = {};
    this.currentIndex = -1;

    this.storeService.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.stores = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  goToStore(): void {
    this.router.navigate(['/detailedStore'], { queryParams: { name: this.currentStore.name } })
  }
}
