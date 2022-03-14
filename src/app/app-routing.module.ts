import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
  { path: 'customer-data', component: CustomerComponent },
  { path: '',   redirectTo: '/customer-data', pathMatch: 'full' },
  { path: '**', redirectTo: '/customer-data', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
