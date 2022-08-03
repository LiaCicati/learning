import { ComponentFixture } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockBuilder, MockRender } from 'ng-mocks';
import { InputButtonComponent } from './input-button.component';

describe('InputButtonComponent spectator', () => {
  let spectator: Spectator<InputButtonComponent>;
  const createComponent = createComponentFactory(InputButtonComponent);

  beforeEach(() => (spectator = createComponent()));

  it('should have a button class', () => {
    expect(spectator.query('button')).toHaveClass('button');
  });
});
