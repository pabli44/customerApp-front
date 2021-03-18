import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components
import { CustomerComponent } from './components/customer/customer.component';
import { DetailCustomerComponent } from './components/customer/detail-customer/detail-customer.component';

const routes: Routes = [
  {path: '', component: CustomerComponent},
  {path: 'customers', component: CustomerComponent},
  {path: 'customers/detail/:customerId', component: DetailCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
