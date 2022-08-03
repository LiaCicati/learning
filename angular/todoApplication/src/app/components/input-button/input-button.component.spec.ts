import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { InputButtonComponent } from './input-button.component';
import { MockBuilder, MockRender } from 'ng-mocks';

describe('InputButtonComponent', () => {
  let component: InputButtonComponent;
  let fixture: ComponentFixture<InputButtonComponent>;

  let spectator: Spectator<InputButtonComponent>;
  const createComponent = createComponentFactory(InputButtonComponent);
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ InputButtonComponent ],
  //     imports: [InputButtonComponent]
  //   })
  //   .compileComponents();

  //   fixture = TestBed.createComponent(InputButtonComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  beforeEach(() => spectator = createComponent());
  beforeEach(() => {
    return MockBuilder().keep(InputButtonComponent, {
      shallow: true,
      export: true,
    });
  });

  it('should create', () => {
    const fixture = MockRender(InputButtonComponent);
    expect(
      fixture.point.componentInstance,
    ).toEqual(jasmine.any(InputButtonComponent));
  });


  it('should have a button class', () => {
    expect(spectator.query('button')).toHaveClass('button');
  });


});
