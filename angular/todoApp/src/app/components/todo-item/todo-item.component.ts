import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-todo-item',
  imports: [CommonModule],
  template: `
    <div class="todo-item">
      <div>
        <input
          type="checkbox"
          class="todo-checkbox"
          (click)="completeItem()"
          [checked]="item.completed"
        />
        <span
          class="todo-title"
          [ngClass]="{ 'todo-complete': item.completed }"
        >
          {{ item.title }}
        </span>
      </div>

      <button class="button-delete" (click)="removeItem()">x</button>
    </div>
  `,
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // @Input() taskList !: string[];
  @Input() item!: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  removeItem(): void {
    this.remove.emit(this.item);
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed },
    });
  }
}
