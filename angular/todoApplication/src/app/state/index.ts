// import {
//   ActionReducer,
//   ActionReducerMap,
//   createFeatureSelector,
//   createSelector,
//   MetaReducer
// } from '@ngrx/store';
// import { environment } from '../../environments/environment';
// import { TodoListState } from '../state/todos/reducers';
// import * as fromTodoListReducers from '../state/todos/reducers';

// export interface AppState {
//   todoList: TodoListState,
// }

// export const reducers: ActionReducerMap<AppState> = {
//   todoList: fromTodoListReducers.reducer
// };


// export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { TodoListState } from "./todos/reducers";
import * as fromTodoListReducers from '../state/todos/reducers';

export interface AppState {
  items: TodoListState;
}

export const reducers: ActionReducerMap<AppState> = {
  items: fromTodoListReducers.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
