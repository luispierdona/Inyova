import { createAction, props } from '@ngrx/store';
import { CustomerProps } from './customer.models';

export enum CustomerActionTypes {
  // Customer's Save Local
  SaveLocal = '[Customer Page] Save Local',
  SaveLocalClean = '[Customer Page] Save Local Clean',
}

// Customer Save Local
export const SaveLocal = createAction(CustomerActionTypes.SaveLocal, props<{ customer: CustomerProps; }>());
export const SaveLocalClean = createAction(CustomerActionTypes.SaveLocalClean);