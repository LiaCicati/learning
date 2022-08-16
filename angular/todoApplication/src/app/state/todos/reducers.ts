import { TodoItem } from 'src/app/interfaces/todo-item';
import { Action, createReducer, on } from '@ngrx/store';
import * as TodoListActions from './actions';

export interface TodoListState {
  todos: TodoItem[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: TodoListState = {
  todos: [],
  error: '',
  status: 'pending',
};

const todoListReducer = createReducer(
  initialState,
  on(TodoListActions.setNewItem, (state, { item }) => ({
    ...state,
    todos: state.todos.concat(item),
  })),

  on(TodoListActions.deleteTodoItem, (state, { id }) => ({
    ...state,
    todos: removeItemFromList(state.todos, id),
  })),
  on(TodoListActions.changeCompletedStatus, (state, { id, completed }) => ({
    ...state,
    todos: markListElementAsCompleted(state.todos, id, completed),
  })),
  on(TodoListActions.loadTodos, (state) => ({ ...state, status: 'loading' })),
  on(TodoListActions.loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos: todos,
    error: '',
    status: 'success',
  })),
  // Handle todos load failure
  on(TodoListActions.loadTodosFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);

function removeItemFromList(list: TodoItem[], id: string): TodoItem[] {
  return list.filter((element) => {
    return element._id !== id;
  });
}

function markListElementAsCompleted(
  list: TodoItem[],
  id: string,
  completed: boolean
): TodoItem[] {
  return list.map((value) => {
    if (value._id === id) {
      return {
        ...value,
        completed: completed,
      };
    } else {
      return value;
    }
  });
}

export function reducer(state: TodoListState | undefined, action: Action) {
  return todoListReducer(state, action);
}
