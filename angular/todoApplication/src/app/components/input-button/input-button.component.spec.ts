import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputButtonComponent } from './input-button.component';
import { MockBuilder, MockRender } from 'ng-mocks';

describe('InputButtonComponent', () => {
  let component: InputButtonComponent;
  let fixture: ComponentFixture<InputButtonComponent>;

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





});
