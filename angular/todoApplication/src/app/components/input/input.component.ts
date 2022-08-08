import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
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
  name?: string;

  @Input()
  for?: string;

  @Input()
  placeholder?: string;
  @Input()
  form?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
