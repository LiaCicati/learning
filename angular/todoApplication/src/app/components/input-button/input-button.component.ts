import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
@Component({
  selector: 'app-input-button',
  standalone: true,
  imports: [FormsModule, ButtonComponent, InputComponent],
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.scss'],
})
export class InputButtonComponent {
  @Output() submit = new EventEmitter<string>();
  @Output() onSubmitForm: EventEmitter<any> = new EventEmitter();
  newTaskText = '';
  formC!: FormGroup;
  constructor() {}

  // public onInput(value: string) {
  //   this.newTaskText = value;
  // }
  // public submitValue(newTitle: string): void {
  //   this.submit.emit(newTitle);

  //   this.newTaskText = '';
  // }

  public onSubmit(form: NgForm) {
    this.onSubmitForm.emit(form.form.value.taskTitle);
    form.reset(); //TODO: see why it's not working
  }
}
