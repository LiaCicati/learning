import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';
import * as fromTodoListSelectors from '../state/todos/selectors';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { AppState } from '../state';
@Injectable({ providedIn: 'root' })
export class TodoService {
  private todoListSubject: Subject<TodoItem[]> = new Subject<TodoItem[]>();

  constructor(private storageService: StorageService) {}

  async getTodos(): Promise<TodoItem[]> {
    return (await this.storageService.getData('todos')) || [];
  }

  async saveTodos(todos: TodoItem[]) {
    return this.storageService.setData('todos', todos);
  }

  getTodoList() {
    return this.todoListSubject.asObservable();
  }
}
