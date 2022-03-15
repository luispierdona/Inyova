import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import * as fromCustomer from "./customer.reducer";
import { CustomerEffects } from './customer.effects';
import { CustomerService } from '../services/customer.service';

@NgModule({
  imports: [
    // Store
    StoreModule.forFeature(fromCustomer.customerFeatureKey, fromCustomer.reducer),
    EffectsModule.forFeature([CustomerEffects]),
  ],
  providers: [
    CustomerService,
  ],
})
export class CustomersStoreModule { }