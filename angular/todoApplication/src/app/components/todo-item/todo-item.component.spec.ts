import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { MockBuilder, MockRender, MockComponents } from 'ng-mocks';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { CommonModule } from '@angular/common';

describe('TodoItemComponent', () => {
  let spectator: Spectator<TodoItemComponent>;
  let component: TodoItemComponent;

  const createComponent = createComponentFactory({
    component: TodoItemComponent,
    imports: [CommonModule]
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });


  it('should create', () => {
    pending();
    // console.log(component);
    // expect(component).toBeFalsy();
  });

});
