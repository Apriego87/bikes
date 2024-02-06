import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStoresComponent } from './components/list-stores/list-stores.component';
import { DetailedStoresComponent } from './components/detailed-stores/detailed-stores.component';
import { ListStaffComponent } from './components/list-staff/list-staff.component';
import { StoreRootComponent } from './components/store-root/store-root.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';

const routes: Routes = [
  { path: '', redirectTo: 'stores', pathMatch: 'full' },
  { path: 'stores', component: ListStoresComponent },
  { path: 'storeRoot', component: StoreRootComponent },
  { path: 'detailedStore', component: DetailedStoresComponent },
  { path: 'listStaff', component: ListStaffComponent },
  { path: 'addStaff', component: AddStaffComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
