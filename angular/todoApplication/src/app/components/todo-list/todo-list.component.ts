import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { loadTodos } from '../../state/todos/actions';
import {
  deleteTodoItem,
  changeCompletedStatus,
} from 'src/app/state/todos/actions';
import { AppState } from 'src/app/state';
import { getTodoItems } from '../../state/todos/selectors';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  imports: [TodoFormComponent, TodoItemComponent, CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  public allTodos$ = this.store.select(getTodoItems); // a stream of the current todos state

  ngOnInit() {
    this.store.dispatch(loadTodos());
  }

  removeItem(item: any) {
    this.store.dispatch(deleteTodoItem({ id: item._id }));
  }

  updateItem(item: any, changes: any) {
    this.store.dispatch(
      changeCompletedStatus({ id: item._id, completed: changes })
    );
  }
}
