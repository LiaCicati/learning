import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-add-todo',
  imports: [AddTodoComponent],
  template: `
    <form class="form">
      <input
        class="todo-input"
        #taskInput
        type="text"
        (input)="onInput(taskInput.value)"
        [value]="newTaskText"
        placeholder="Name"
      />
      <button class="add-button" (click)="onClick()">Add task</button>
      <p *ngIf="errorMessageText" class="error-msg">{{ errorMessageText }}</p>
    </form>
  `,
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Input() taskList!: string[];
  newTaskText = '';
  @Input() errorMessageText = '';

  onInput(value: string) {
    this.newTaskText = value;
  }

  onClick() {
    if (!this.newTaskText.length) {
      this.errorMessageText = "Task can't be empty";
      return;
    }

    this.errorMessageText = '';
    this.taskList.push(this.newTaskText);

    this.newTaskText = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
