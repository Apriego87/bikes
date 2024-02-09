import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '../../models/store.model';
import { DetailedStoresComponent } from '../detailed-stores/detailed-stores.component';

@Component({
  selector: 'app-store-root',
  templateUrl: './store-root.component.html',
  styleUrl: './store-root.component.css'
})
export class StoreRootComponent implements OnInit {
  component = 'details'
  currentStore: Store = {}
  currentIndex = -1
  storeID = this.route.snapshot.queryParams['id'];
  storeName = this.route.snapshot.queryParams['name'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  /* onValueChange(newValue: string) {
    this.component = newValue;
    console.log(this.component)
  } */
  updateComponent(newComponent: string) {
    this.component = newComponent;
  }
}
