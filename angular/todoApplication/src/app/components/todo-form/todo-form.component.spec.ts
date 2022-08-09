import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockBuilder, MockComponents, MockRender, ngMocks } from 'ng-mocks';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { By } from '@angular/platform-browser';
import { NgForm, FormsModule, FormGroup } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let spectator: Spectator<TodoFormComponent>;
  let component: TodoFormComponent;
  const createComponent = createComponentFactory({
    component: TodoFormComponent,
    imports: [FormsModule],
    mocks: [NgForm, FormGroup],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  beforeEach(() => {
    return MockBuilder(
      // It can be an array too, if you want to keep and export more than 1 thing
      [TodoFormComponent, FormsModule]
    );
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
pending();
  });


  it('should clear the field after submitting a value', () => {
    pending();
  });

  // it('should correctly @Output value of text input in component', () => {
  //   spyOn(component.onSubmitForm, 'emit'); // “spy” on the emit method of component.submit object.
  //   const button = spectator.debugElement.nativeElement.querySelector('button');
  //   const form = spectator.debugElement.nativeElement.querySelector('form');
  //   spectator.debugElement.nativeElement.querySelector('input').value =
  //     'A new title'; // Change the value of the component’s text input.
  //   //TODO: look here
  //   const inputText =
  //     spectator.debugElement.nativeElement.querySelector('input').value;
  //   console.log(inputText);
  //   console.log(form);

  //   // button.click(); // Simulate the button click
  //   //spectator.detectChanges();
  //   spectator.click(button);

  //   expect(component.onSubmitForm.emit).toHaveBeenCalledWith(inputText);
  // });
});
