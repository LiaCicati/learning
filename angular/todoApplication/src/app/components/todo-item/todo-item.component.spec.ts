import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { MockBuilder, MockRender, MockComponents } from 'ng-mocks';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../../interfaces/todo-item';

describe('TodoItemComponent', () => {
  let spectator: Spectator<TodoItemComponent>;
  let component: TodoItemComponent;
  let item: TodoItem;
  const createComponent = createComponentFactory({
    component: TodoItemComponent,
    imports: [CommonModule],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    spectator.setInput('item', { title: 'hi' });
  });


  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should correctly render the passed @Input value', () => {
    component.item = { title: 'you' };
    spectator.detectChanges();
    const compiled = spectator.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain('you');
  });

  it('should correctly emit remove @Output', () => {
    spyOn(component.remove, 'emit'); // “spy” on the emit method of component.remove object.

    const button = spectator.debugElement.nativeElement.querySelector('button');

    button.click(); // Simulate the button click
    spectator.detectChanges();

    expect(component.remove.emit).toHaveBeenCalled();
  });

  it('should correctly emit update @Output', () => {
    spyOn(component.update, 'emit'); // “spy” on the emit method of component.remove object.

    const input = spectator.debugElement.nativeElement.querySelector('input');

    input.click(); // Simulate the input click
    spectator.detectChanges();

    expect(component.update.emit).toHaveBeenCalled();
  });
});
