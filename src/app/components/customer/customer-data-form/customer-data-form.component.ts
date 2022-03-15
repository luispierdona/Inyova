import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as CustomerReducer from '../store/customer.reducer';
import * as CustomerActions from '../store/customer.actions';
import { debounceTime, ReplaySubject, take, takeUntil } from 'rxjs';
import { CustomerProps } from '../store/customer.models';

@Component({
  selector: 'app-customer-data-form',
  templateUrl: './customer-data-form.component.html',
  styleUrls: ['./customer-data-form.component.css']
})
export class CustomerDataFormComponent implements OnInit, OnDestroy {

  dataForm: FormGroup;
  countries: string[] = ['Argentina', 'Switzerland', 'Germany', 'Italy'];
  gender: string | null = null;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    _fb: FormBuilder,
    private store: Store<CustomerReducer.CustomerState>,
  ) {
    this.dataForm = _fb.group({
      gender: new FormControl(null, [Validators.required]),
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      day: new FormControl(null, [Validators.required]),
      month: new FormControl(null, [Validators.required]),
      year: new FormControl(null, [Validators.required]),
      nationality: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {

    this.store.pipe(
      take(1),
      select(CustomerReducer.selectToSave),
    ).subscribe(customerToSave => {
      this.customerToSaveToFormUpdate(customerToSave);
    });

  }

  customerToSaveToFormUpdate(customerToSave: CustomerProps) {
    this.dataForm.patchValue(customerToSave, { emitEvent: false });

    this.dataForm.valueChanges.pipe(
      takeUntil(this.destroyed$),
      debounceTime(100),
    ).subscribe(_ => this.formToSuuplierToSaveUpdate());
  }

  formToSuuplierToSaveUpdate() {
    const customerData: CustomerProps = this.dataForm.value;

    this.store.dispatch(CustomerActions.SaveLocal({
      customer: customerData
    }));
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
