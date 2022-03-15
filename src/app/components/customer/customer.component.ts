import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';
import { CustomerProps } from './store/customer.models';

import * as CustomerReducer from './store/customer.reducer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerToSave: CustomerProps = {};

  constructor(
    private store: Store<CustomerReducer.CustomerState>,
  ) { }

  ngOnInit(): void {
    this.store.pipe(
      // takeUntil('customerToSaveTakeUntil'),
      select(CustomerReducer.selectToSave),
    ).subscribe(customerToSave => {
      this.customerToSave = customerToSave;
    });
  }

  save() {
    console.log("🚀 customerToSave", this.customerToSave)

  }


}
