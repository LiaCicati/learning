import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, InputComponent, ButtonComponent, FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @Output() onSubmitForm: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public onSubmit(form: NgForm) {
    this.onSubmitForm.emit(form.form.value.taskTitle);
    form.reset(); //TODO: see why it's not working
  }
}
