import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModel } from './models/customer/customer.model';
import { OrderModel } from './models/order/order.model';
import { OrderItemModel } from './models/order-item/order-item.model';
import { ProductModel } from './models/product/product.model';
import { StaffModel } from './models/staff/staff.model';
import { StockModel } from './models/stock/stock.model';
import { StoreModel } from './models/store/store.model';
import { ListBikesComponent } from './components/list-bikes/list-bikes.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerModel,
    OrderModel,
    OrderItemModel,
    ProductModel,
    StaffModel,
    StockModel,
    StoreModel,
    ListBikesComponent
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
