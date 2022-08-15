import { createSelector } from '@ngrx/store';
import { TodoListState } from 'src/app/state/todos/reducers';
import { AppState } from 'src/app/state/index';

export const getRootState = (state: AppState) => state.todoList;

export const getTodoItems = createSelector(
  getRootState,
  (state: TodoListState) => state.items
);
