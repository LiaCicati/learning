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

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  public hasWhiteSpace(s: string) {
    return /^\s/.test( s);
  }

  public addItem(title: string): void {
    if (!title) {
      this.errorMessageText = 'Task cannot be empty';
      return;
    } else if (this.hasWhiteSpace(title)) {
      this.errorMessageText = 'This field cannot be left blank';
      return;
    }

    this.errorMessageText = '';
    this.todoListService.addItem({ title });
  }

  public removeItem(item: TodoItem): void {
    this.todoListService.deleteItem(item);
  }

  public updateItem(item: TodoItem, changes: any): void {
    this.todoListService.updateItem(item, changes);
  }
}
