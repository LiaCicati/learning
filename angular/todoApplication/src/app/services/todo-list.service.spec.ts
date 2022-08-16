import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo-list.service';
import { TodoItem } from '../interfaces/todo-item';

describe('TodoListService', () => {
  let service: TodoService;
  let item: TodoItem;

  beforeEach(() => {
    const storage = jasmine.createSpyObj('StorageService', [
      'getData',
      'setData',
    ]);
    const stubValue = {};
    storage.getData.and.returnValue(stubValue);
    service = new TodoService(storage);

    item = {
      title: 'new task to do',
      completed: false,
    };
  });
  //TODO: add describe
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should add task', () => {
  //   service.todoList = [];

  //   service.addItem(item);

  //   expect(service.todoList.length).toBe(1);
  // });

  // it('should delete task', () => {
  //   service.todoList = [];
  //   service.addItem(item);
  //   service.deleteItem(item);
  //   expect(service.todoList.length).toBe(0);
  // });

  // it('should update task', () => {
  //   service.todoList = [];
  //   service.addItem(item);
  //   service.updateItem(item, (item.completed = true));

  //   expect(service.todoList[0].completed).toBeTruthy();
  // });

  // it('should return list of tasks', () => {
  //   service.todoList = [];
  //   service.addItem(item);
  //   service.addItem(item);

  //   expect(service.getTodoList().length).toBe(2);

  //   expect(service.getTodoList()).toEqual([item, item]);
  // });
});
