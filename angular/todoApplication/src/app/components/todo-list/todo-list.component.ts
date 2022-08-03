import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';
import { TodoListService } from '../../services/todo-list.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { InputButtonComponent } from '../input-button/input-button.component';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  imports: [InputButtonComponent, TodoItemComponent, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList!: TodoItem[];
  errorMessageText = '';

  constructor(private todoListService: TodoListService) {}

  addItem(title: string): void {
    if (!title) {
      this.errorMessageText = "Task cannot be empty";
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
