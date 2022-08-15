import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';
import { TodoService } from '../../services/todo-list.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import * as fromTodoListSelectors from '../../state/todos/selectors';
import { loadTodos } from '../../state/todos/actions';
import { getTodoItems } from '../../state/todos/selectors';
import {
  deleteTodoItem,
  changeCompletedStatus,
} from 'src/app/state/todos/actions';
import { AppState } from 'src/app/state';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  imports: [TodoFormComponent, TodoItemComponent, CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList: Promise<TodoItem[]> = [] as any;
  public allTodos$ = this.todoListService.retrieveListFromStore();

  constructor(private todoListService: TodoService, private store: Store<AppState>) {}

  ngOnInit() {
    console.log(this.todoListService.retrieveListFromStore());

    this.store.dispatch(loadTodos());
  }

  removeItem(item: TodoItem) {
    this.store.dispatch(deleteTodoItem({ id: item._id! }));


  }

  updateItem(item: any, changes: any) {
    this.store.dispatch(
      changeCompletedStatus({ id: item._id, completed: changes })
    );
    // this.todoListService.updateItem(item, changes);
  }
}
