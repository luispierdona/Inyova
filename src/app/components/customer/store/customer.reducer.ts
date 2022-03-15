import { createReducer, Action, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as CustomerActions from './customer.actions';
import { CustomerProps } from './customer.models';
import * as _ from 'lodash';

export const customerFeatureKey = 'customer';

export interface CustomerState {
  toSave: CustomerProps;
}

export const initialState: CustomerState = {
  toSave: {},
}

const customerReducer = createReducer(
  initialState,

  /**
   * Actions to Add and Edit 
   */

  // Customer Save
  on(CustomerActions.SaveLocal, (state, { customer }) => {
    const newToSave = _.merge({}, state.toSave, customer);

    return {
      ...state,
      toSave: newToSave,
    };
  }),

  on(CustomerActions.SaveLocalClean, state => {
    return {
      ...state,
      toSave: initialState.toSave,
    };
  }),

)

export function reducer(state: CustomerState | undefined, action: Action) {
  return customerReducer(state, action);
}

// Selectors to List
export const selectCustomer = createFeatureSelector<CustomerState>(customerFeatureKey);

// Selectors to Add and Edit Form
export const selectToSave = createSelector(
  selectCustomer,
  (state: CustomerState) => state.toSave,
);