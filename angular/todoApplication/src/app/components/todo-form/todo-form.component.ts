import { Component, EventEmitter, OnInit, Output, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { NgForm, FormsModule, FormGroup } from '@angular/forms';
import { TodoItem } from '../../interfaces/todo-item';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, InputComponent, ButtonComponent, FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
public taskName!:string;

  @ViewChild("myForm")
  private readonly _form!:NgForm;


  @Output() onSubmitForm: EventEmitter<any> = new EventEmitter();
  constructor() {}
  value?: TodoItem;

  public onSubmit(form: FormGroup) {
    this.onSubmitForm.emit(form.value.taskTitle);
    this._form.reset(); //TODO: see why it's not working
    // this.taskName='';
  }
}
