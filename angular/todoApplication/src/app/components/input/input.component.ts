import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input()
  label = 'Label';

  @Input()
  type?: string;

  @Input()
  disabled = false;

  @Input()
  required = true;

  @Input()
  readonly = false;

  @Input()
  name?: string;

  @Input()
  inputValue = '';

  @Output()
  inputValueChange = new EventEmitter<string>();

  @Input()
  for?: string;

  @Input()
  placeholder = 'Type here...';
  @Input()
  form?: string;

  @Input()
  borderRadius?: string;

  @Input()
  outline?: string;

  @Input()
  border?: string;
  @Input()
  labelFontSize?: string;
  @Input()
  labelFontWeight?: string;
  @Input()
  color?: string;
  @Input()
  inputFontSize?: string;
  @Input()
  width?: string;

  constructor() {}

  ngOnInit(): void {}
}
