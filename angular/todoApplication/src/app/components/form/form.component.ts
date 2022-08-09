import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, InputComponent, ButtonComponent, FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Output() onSubmitForm: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public onSubmit(form: NgForm) {
    this.onSubmitForm.emit(form.form.value.taskTitle);
    form.reset(); //TODO: see why it's not working
  }
}
