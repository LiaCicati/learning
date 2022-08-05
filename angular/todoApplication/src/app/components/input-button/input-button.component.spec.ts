import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { InputButtonComponent } from './input-button.component';
import { MockBuilder, MockComponents, MockRender, ngMocks } from 'ng-mocks';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { By } from '@angular/platform-browser';

describe('InputButtonComponent', () => {
  let spectator: Spectator<InputButtonComponent>;
  let component: InputButtonComponent;
  const createComponent = createComponentFactory({
    component: InputButtonComponent,
    mocks: [TodoItemComponent], // services, directives?
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button class', () => {
    expect(spectator.query('button')).toHaveClass('button');
  });

  it('should have an input class', () => {
    expect(spectator.query('input')).toHaveClass('input');
  });

  it('input should be empty when initialized', () => {
    expect(component.newTaskText).toEqual('');
  });

  it('should call onInput with specified value', () => {
    component.onInput('hello');
    expect(component.newTaskText).toBe('hello');
  });

  it('should clear the field after submitting a value', () => {
    component.submitValue('new to do');

    expect(component.newTaskText).toEqual('');
  });
});
