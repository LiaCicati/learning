import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button',
  standalone: true,
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.scss'],
})
export class InputButtonComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  newTaskText = '';
  constructor() {}

  ngOnInit(): void {}

  public onInput(value: string) {
    this.newTaskText = value;
  }
  public submitValue(newTitle: string): void {
    this.submit.emit(newTitle);

    this.newTaskText = '';
  }
}
