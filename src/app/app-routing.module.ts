import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStoresComponent } from './components/list-stores/list-stores.component';
import { DetailedStoresComponent } from './components/detailed-stores/detailed-stores.component';
import { ListStaffComponent } from './components/list-staff/list-staff.component';

const routes: Routes = [
  { path: '', redirectTo: 'stores', pathMatch: 'full' },
  { path: 'stores', component: ListStoresComponent },
  { path: 'detailedStore', component: DetailedStoresComponent },
  { path: 'listStaff', component: ListStaffComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
