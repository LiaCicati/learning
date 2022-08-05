import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { MockBuilder, MockRender, MockComponents } from 'ng-mocks';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

describe('TodoItemComponent', () => {
  let spectator: Spectator<TodoItemComponent>;

  const createComponent = createComponentFactory({
    component: TodoItemComponent,
  });

  beforeEach(() => {
    spectator = createComponent();
  });


  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
