import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

describe('AppComponent', () => {
  beforeEach(() => {
    return MockBuilder(AppComponent);
  });

  beforeEach(() => {
    return MockBuilder().keep(AppComponent, {
      shallow: true,
      export: true,
    });
  });

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [
  //       AppComponent
  //     ],
  //   }).compileComponents();
  // });

  it('should create the app', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.componentInstance;
    // expect(app).toBeTruthy();
    const fixture = MockRender(AppComponent);
    expect(
      fixture.point.componentInstance,
    ).toEqual(jasmine.any(AppComponent));
  });

  it(`should have as title 'todoApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('todoApp');
  });

});
