import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * What text color to use
   */
  @Input()
  color?: string;

  @Input()
  variant!: 'primary' | 'secondary';

  @Input()
  disabled = false;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'large';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Type
   */
  @Input()
  type = 'button'

  @Input()
  borderRadius?: string;

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'button--primary' : 'button--secondary';

    return ['button', `button--${this.size}`, mode];
  }
  constructor() {}

  ngOnInit(): void {}
}
