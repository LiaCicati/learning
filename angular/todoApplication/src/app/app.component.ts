import { Component, OnInit } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoItem } from './interfaces/todo-item';
import { TodoListService } from './services/todo-list.service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [TodoListComponent, CommonModule, TodoFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ToDo List';
  errorMessageText = '';
  todoList!: TodoItem[];

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  public hasWhiteSpace(s: string) {
    return /^\s/.test(s);
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
}
