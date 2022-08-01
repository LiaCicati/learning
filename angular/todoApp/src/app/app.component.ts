import { Component, NgModule } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [TodoListComponent, CommonModule],
  template: `
    <div class="container">
      <h1>ToDo List</h1>
      <app-todo-list></app-todo-list>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todoApp';
}
