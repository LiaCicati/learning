import { TestBed } from '@angular/core/testing';

import { TodoListService } from './todo-list.service';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

describe('TodoListService', () => {
  let service: TodoListService;
  let storage: StorageService;
  let item: TodoItem;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoListService);

    storage = new StorageService();
    service = new TodoListService(storage);

    item = {
      title : "ff",
      completed: false
    }
service.todoList = storage.getData("Todo_List");

  });
  // beforeEach(() => {
  //   service = new TodoListService(storage);
  //   storage = new StorageService();
  // });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

//   it("should create a task in an array", () => {

// // service.addItem(item);

//     expect(service.todoList.length).toBeGreaterThanOrEqual(1);

// console.log("!!!!!!!!!!!!!!!!!! : " + service.todoList);



//   });
});
