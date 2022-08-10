import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
@Component({
  standalone: true,
  selector: 'app-todo-item',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem = {} as any;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  label = 'To walk my dog';

  constructor() {
  }

  ngOnInit(): void {}

  public removeItem(): void {
    this.remove.emit(this.item);
  }

  public completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed },
    });
  }
}
