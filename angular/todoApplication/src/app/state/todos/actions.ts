import { createAction, props } from '@ngrx/store';
import { TodoItem } from 'src/app/interfaces/todo-item';

export const setNewItem = createAction('[Todo list] Set new todo list item', props<{item: TodoItem}>());

export const deleteTodoItem = createAction('[Todo list] Delete todo item', props<{id: string}>());

export const changeCompletedStatus = createAction('[Todo list] Change status of the item', props<{id: string, completed: boolean}>());

export const loadTodos = createAction('[Todo list] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todo API] Todo Load Success',
  props<{ todos: TodoItem[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo API] Todo Load Failure',
  props<{ error: string }>()
);
