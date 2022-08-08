import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-input-button',
  standalone: true,
  imports: [FormsModule],
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
    console.log(form.form);
    this.formC = form.form;

    form.reset();
  }
}
