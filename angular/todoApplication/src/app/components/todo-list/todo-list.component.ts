import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';
import { TodoListService } from '../../services/todo-list.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  imports: [TodoFormComponent, TodoItemComponent, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList!: TodoItem[];

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  public removeItem(item: TodoItem): void {
    this.todoListService.deleteItem(item);
  }

  public updateItem(item: TodoItem, changes: any): void {
    this.todoListService.updateItem(item, changes);
  }
}
