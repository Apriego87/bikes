import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStoresComponent } from './components/list-stores/list-stores.component';
import { FormsModule } from '@angular/forms';
import { DetailedStoresComponent } from './components/detailed-stores/detailed-stores.component';
import { ListStaffComponent } from './components/list-staff/list-staff.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStoresComponent,
    DetailedStoresComponent,
    ListStaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
