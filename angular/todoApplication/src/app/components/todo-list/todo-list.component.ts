import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';
import { TodoListService } from '../../services/todo-list.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import * as fromTodoListSelectors from '../../state/todos/selectors';
import { loadTodos } from '../../state/todos/actions';
import {
  deleteTodoItem,
  changeCompletedStatus,
} from 'src/app/state/todos/actions';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  imports: [TodoFormComponent, TodoItemComponent, CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList!: Observable<TodoItem[]>;


  constructor(private todoListService: TodoListService, private store: Store) {}

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
    this.store.dispatch(loadTodos());
  }

  // retrieveListFromStore() {
  //   this.store.select(fromTodoListSelectors.getTodoItems).subscribe(value => this.todoListSubject.next(value));
  // }
  removeItem(item: any) {
    this.store.dispatch(deleteTodoItem({ id: item._id }));
    this.todoListService.deleteItem(item);
  }

  updateItem(item: any, changes: any) {
    this.store.dispatch(
      changeCompletedStatus({ id: item._id, completed: changes })
    );
    this.todoListService.updateItem(item, changes);
  }
}
