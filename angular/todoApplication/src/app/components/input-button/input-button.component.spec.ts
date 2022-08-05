import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { InputButtonComponent } from './input-button.component';
import { MockBuilder, MockComponents, MockRender, ngMocks } from 'ng-mocks';
import { TodoItemComponent } from '../todo-item/todo-item.component';

describe('InputButtonComponent', () => {
  let spectator: Spectator<InputButtonComponent>;

  const createComponent = createComponentFactory({
    component: InputButtonComponent,
    mocks: [TodoItemComponent], // services, directives?
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should have a button class', () => {
    expect(spectator.query('button')).toHaveClass('button');
  });
});
