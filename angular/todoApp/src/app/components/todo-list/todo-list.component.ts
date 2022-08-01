import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';
import { TodoListService } from '../../services/todo-list.service';
import { ButtonComponent } from '../button/button.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  imports: [ButtonComponent, TodoItemComponent, CommonModule],
  template: `
    <div class="todo-app">
      <app-button (submit)="addItem($event)"></app-button>
      <ul class="list">
        <li *ngFor="let todoItem of todoList">
          <app-todo-item
            [item]="todoItem"
            (remove)="removeItem($event)"
            (update)="updateItem($event.item, $event.changes)"
          ></app-todo-item>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoList!: TodoItem[];
  errorMessageText = '';

  constructor(private todoListService: TodoListService) {}

  addItem(title: string): void {
    if (!title) {
      this.errorMessageText = "Task can't be empty";
      return;
    }
    this.errorMessageText = '';
    this.todoListService.addItem({ title });
  }

  removeItem(item: TodoItem): void {
    this.todoListService.deleteItem(item);
  }

  updateItem(item: TodoItem, changes: any): void {
    this.todoListService.updateItem(item, changes);
  }
  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }
}
