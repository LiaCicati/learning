import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-button',
  imports: [CommonModule],
  template: `
    <input
      #inputElementRef
      (input)="onInput(inputElementRef.value)"
      [value]="newTaskText"
      class="input"
    />

    <button class="button" (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  title = 'Enter task';
  newTaskText = '';
  constructor() {}

  ngOnInit(): void {}
  onInput(value: string) {
    this.newTaskText = value;
  }
  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);

    this.newTaskText = '';
  }
}
