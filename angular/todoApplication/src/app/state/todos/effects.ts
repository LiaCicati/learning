import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  setNewItem,
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
} from './actions';
import { TodoService } from 'src/app/services/todo-list.service';
import { of, from } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  withLatestFrom,
} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { getTodoItems } from './selectors';
import { AppState } from '../index';
import { deleteTodoItem, changeCompletedStatus } from './actions';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private todoService: TodoService
  ) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe( // stream of all the actions
      ofType(loadTodos), // listen for loadTodos
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.todoService.getTodos()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((todos) => loadTodosSuccess({ todos: todos })),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(loadTodosFailure({ error })))
        )
      )
    )
  );

  // Run this code when the add, remove or update todo action is dispatched
  saveTodos$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setNewItem, deleteTodoItem, changeCompletedStatus),
        withLatestFrom(this.store.select(getTodoItems)),
        switchMap(([action, todos]) => from(this.todoService.saveTodos(todos)))
      ),

    { dispatch: false }
  );
}
