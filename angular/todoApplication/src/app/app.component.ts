import { Component, OnInit } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoItem } from './interfaces/todo-item';
import { TodoListService } from './services/todo-list.service';
import { Observable } from 'rxjs';
import { Store, State } from '@ngrx/store';
import { setNewItem } from './state/todos/actions';
import { v4 as uuid } from 'uuid';
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
  todoList: Observable<TodoItem[]> = [] as any;

  constructor(private todoListService: TodoListService, private store: Store) {}

  ngOnInit(): void {
    this.todoList = this.todoListService.getList();
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
    this.store.dispatch(setNewItem({item: {_id: uuid(), title: title, completed: false}}));
    this.todoListService.addItem({title});

  }
}
