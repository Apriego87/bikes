import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Customer } from './models/customer.model';
import { Order } from './models/order.model';
import { OrderItem } from './models/order-item.model';
import { Product } from './models/product.model';
import { Staff } from './models/staff.model';
import { Stock } from './models/stock.model';
import { Store } from './models/store.model';
import { ListStoresComponent } from './components/list-stores/list-stores.component';

@NgModule({
  declarations: [
    AppComponent,
    Customer,
    Order,
    OrderItem,
    Product,
    Staff,
    Stock,
    Store,
    ListStoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
