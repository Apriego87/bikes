import { Component, OnInit } from '@angular/core';
import { Store } from '../../models/store.model';
import { StoreServiceService } from '../../services/store-service.service';

@Component({
  selector: 'app-list-stores',
  templateUrl: './list-stores.component.html',
  styleUrl: './list-stores.component.css'
})
export class ListStoresComponent implements OnInit {
  stores?: Store[];
  currentStore: Store = {};
  currentIndex = -1;
  name: '';
  city: '';

  constructor(private storeService: StoreServiceService) {}

  ngOnInit(): void {
      this.retrieveStores();
  }

  retrieveStores(): void {
    this.storeService.getAll().subscribe({
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
}
