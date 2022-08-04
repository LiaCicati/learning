import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { StorageService } from './storage.service';

import { TodoListService } from './todo-list.service';
import { TodoItem } from '../interfaces/todo-item';

describe('TodoListService', () => {
  let spectator: SpectatorService<TodoListService>;
  const createService = createServiceFactory({
    service: TodoListService,
    providers: [],
    entryComponents: [],
    mocks: [StorageService],
  });

  beforeEach(() => (spectator = createService()));

  it('should have elements in the array ', () => {
    expect(spectator.service.todoList.length).toBeGreaterThanOrEqual(1);
  });

  it('should add element in the array ', () => {
    let item: TodoItem;
    item = {
      title: 'hi',
    };

    spectator.service.addItem(item);
    expect(spectator.service.todoList.length).toBeGreaterThan(2);
  });

  it('should remove element from the array ', () => {
    let item: TodoItem;
    item = {
      title: 'hi',
    };
    spectator.service.deleteItem(item);
    // expect(spectator.service.todoList).toBeLessThan(1);
  });
});
