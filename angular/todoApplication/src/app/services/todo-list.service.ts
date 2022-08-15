import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state';
import * as fromTodoListSelectors from '../state/todos/selectors';

const todoListStorageKey = 'Todo_List';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private todoListSubject: Subject<TodoItem[]> = new Subject<TodoItem[]>();

  constructor(
    private storageService: StorageService,
    private http: HttpClient,
    private store: Store<AppState>
  ) {
    this.retrieveListFromDataBase();
    this.retrieveListFromStore();
  }

  retrieveListFromStore() {
    this.store
      .select(fromTodoListSelectors.getTodoItems)
      .subscribe((value) => this.todoListSubject.next(value));
  }

 async saveList(todos: TodoItem[]) {
    this.storageService.setData(todoListStorageKey, todos);
  }

  retrieveListFromDataBase() {
    this.http
      .get<TodoItem[]>('http://localhost:4200/')
      .subscribe((response) => this.todoListSubject.next(response));
  }

  // async getTodoList(): Promise<TodoItem[]> {

  //   return (await this.storageService.getData(todoListStorageKey)) || [];
  // }

  getTodoList() {
    return this.todoListSubject.asObservable();
  }

  getList() {
    return this.storageService.getData(todoListStorageKey);
  }

  addItem(item: TodoItem) {
    this.http
      .post('http://localhost:4200/', {
        title: item.title,
        completed: item.completed || false,
      })
      .subscribe(() => this.retrieveListFromDataBase());

  }

  updateItem(item: TodoItem, changes: any) {
    return this.http
      .put(`http://localhost:4200/${item._id}`, {
        ...item,
        completed: changes,
      })
      .subscribe(() => this.retrieveListFromDataBase());

  }

  deleteItem(item: TodoItem) {
    return this.http
      .delete(`http://localhost:4200/${item._id}`)
      .subscribe(() => this.retrieveListFromDataBase());

  }
}
