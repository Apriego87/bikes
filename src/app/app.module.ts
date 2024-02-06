import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStoresComponent } from './components/list-stores/list-stores.component';
import { FormsModule } from '@angular/forms';
import { DetailedStoresComponent } from './components/detailed-stores/detailed-stores.component';
import { ListStaffComponent } from './components/list-staff/list-staff.component';
import { StoreRootComponent } from './components/store-root/store-root.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    ListStoresComponent,
    DetailedStoresComponent,
    ListStaffComponent,
    StoreRootComponent,
    AddStaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
