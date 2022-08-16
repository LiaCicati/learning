import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';
@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private storageService: StorageService) {}

  async getTodos(): Promise<TodoItem[]> {
    return (await this.storageService.getData('todos')) || [];
  }

  async saveTodos(todos: TodoItem[]) {
    return this.storageService.setData('todos', todos);
  }
}
