import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { NgForm, FormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, InputComponent, ButtonComponent, FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  @Output() onSubmitForm: EventEmitter<any> = new EventEmitter();
  newTaskText = '';
  formC!: FormGroup;
  constructor() {}

  // public onInput(value: string) {
  //   this.newTaskText = value;
  // }
  // public submitValue(newTitle: string): void {
  //   this.submit.emit(newTitle);

  //   this.newTaskText = '';
  // }

  public onSubmit(form: NgForm) {
    this.onSubmitForm.emit(form.form.value.taskTitle);
    form.reset(); //TODO: see why it's not working
  }
}
