import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { TodoListState } from '../state/todos/reducers';
import * as fromTodoListReducers from '../state/todos/reducers';

export interface AppState {
  todos: TodoListState;
}

export const reducers: ActionReducerMap<AppState> = {
  todos: fromTodoListReducers.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
