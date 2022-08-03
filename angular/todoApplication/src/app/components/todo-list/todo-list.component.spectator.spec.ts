// import { CommonModule } from '@angular/common';
// import {
//   createHostFactory,
//   Spectator,
//   createComponentFactory,
//   SpectatorHost,
// } from '@ngneat/spectator';
// import { TodoListService } from 'src/app/services/todo-list.service';
// import { InputButtonComponent } from '../input-button/input-button.component';
// import { TodoItemComponent } from '../todo-item/todo-item.component';
// import { TodoListComponent } from './todo-list.component';
// import { MockBuilder, MockComponent, MockRender } from 'ng-mocks';
// import { TodoItem } from '../../interfaces/todo-item';
// import { NgModule } from '@angular/core';
// describe('Todo List component spectator', () => {
//   let spectator: Spectator<TodoListComponent>;
//   const createComponent = createComponentFactory({
//     component: TodoListComponent,
//     imports: [
//       MockBuilder([
//         TodoListComponent,
//         InputButtonComponent,
//         TodoItemComponent,
//         CommonModule,
//       ]),
//     ],
//     providers: [
//       TodoListService,
//     ]

//   });

//     beforeEach(() => (spectator = createComponent()));

//     it('should use the todoList from the service', () => {
//       // const fixture = MockRender(TodoListComponent);
//       // const taskService = fixture.debugElement.injector.get(TodoListService);
//       // fixture.detectChanges();
//       // console.log(taskService.getTodoList());
//       // console.log(fixture.point.componentInstance.todoList);

//       // expect(taskService.getTodoList()).toEqual(
//       //   fixture.point.componentInstance.todoList
//       // );
//     });

//     // it('should add a task', () => {
//     //   const fixture = MockRender(TodoListComponent);
//     //   let item: TodoItem;
//     //   item = {
//     //     title: 'hi',
//     //     completed: false,
//     //   };
//     //   fixture.point.componentInstance.addItem(item.title);
//     //   fixture.detectChanges();

//     //   console.log(fixture.point.componentInstance.todoList.length);
//     //   const compiled = fixture.debugElement.nativeElement;
//     //   expect(compiled.innerHTML).toContain('hi');
//     // });
// });
