import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as _ from 'lodash';
import { customerFeatureKey } from 'src/app/components/customer/store/customer.reducer';
import { environment } from 'src/environments/environment';

export interface State { }

export const reducers: ActionReducerMap<State> = {};

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('action', _.cloneDeep(action), 'state', _.cloneDeep(state));

    return reducer(state, action);
  };
}

const localStorageStatesKeys: any[] = [];
localStorageStatesKeys.push(customerFeatureKey);

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: localStorageStatesKeys, rehydrate: true })(reducer);
}

const metaReducersList = [localStorageSyncReducer];
if (!environment.production) metaReducersList.push(debug);

export const metaReducers: MetaReducer<State>[] = metaReducersList;
