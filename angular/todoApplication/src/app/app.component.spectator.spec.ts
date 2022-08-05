import { AppComponent } from './app.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockBuilder } from 'ng-mocks';

describe('AppComponentSpectator', () => {
  let spectator: Spectator<AppComponent>;
  const dependencies = MockBuilder(AppComponent).build();
  const createComponent = createComponentFactory({
    component: AppComponent,
    ...dependencies,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it(`should have as title 'ToDo List'`, () => {
    expect(spectator.component.title).toEqual('ToDo List');
  });

  it('should render title', () => {
    const compiled = spectator.fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content h1')?.textContent).toContain(
      'ToDo List'
    );
  });

  it('should display a different test title', () => {
    spectator.component.title = 'Test Title';
    expect(spectator.component.title).toContain('Test Title');
  });
});
