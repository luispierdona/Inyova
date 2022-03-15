import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { CustomerDataFormComponent } from './customer-data-form/customer-data-form.component';
import { CustomerProps } from './store/customer.models';

import * as CustomerReducer from './store/customer.reducer';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy, AfterViewInit {

  customerToSave: CustomerProps = {};
  forms: { form: FormGroup }[] = [];

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  // get the CustomerComponent
  @ViewChild(CustomerDataFormComponent, { static: false })
  set statusData(v: CustomerDataFormComponent) {
    this.customerDataComponent = v;
  }
  customerDataComponent: CustomerDataFormComponent | undefined;

  constructor(
    private store: Store<CustomerReducer.CustomerState>,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {

    this.store.pipe(
      takeUntil(this.destroyed$),
      select(CustomerReducer.selectToSave),
    ).subscribe(customerToSave => {
      this.customerToSave = customerToSave;
    });
  }

  ngAfterViewInit() {
    this.createFormArray();
  }

  createFormArray() {
    this.forms = [];

    setTimeout(() => {
      if (this.customerDataComponent) {
        this.forms.push({ form: this.customerDataComponent.dataForm });
      }
    });
  }

  save() {
    let ok = true;

    for (let i = 0; i < this.forms.length; i++) {
      const f = this.forms[i];

      f.form.markAllAsTouched();
      f.form.updateValueAndValidity();

      if (!f.form.valid) {
        this._snackBar.open('Some fields are missing', '', {
          panelClass: ['warn'],
          duration: 3500,
          horizontalPosition: "end",
        });
        ok = false;
      }
    }

    // If ALL mandatory fields are NOT filled, then return
    if (!ok) {
      return;
    }

    this._snackBar.open('Information Saved', 'close', {
      duration: 3500
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }


}
