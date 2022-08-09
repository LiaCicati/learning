import { AppComponent } from './app.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockBuilder } from 'ng-mocks';

describe('AppComponentSpectator', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent
  const dependencies = MockBuilder(AppComponent).build();
  const createComponent = createComponentFactory({
    component: AppComponent,
    ...dependencies,
  });


  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ToDo List'`, () => {
    expect(component.title).toEqual('ToDo List');
  });

  it('should render title', () => {
    const compiled = spectator.fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content h1')?.textContent).toContain(
      'ToDo List'
    );
  });

  it('should display a different test title', () => {
    component.title = 'Test Title';
    expect(component.title).toContain('Test Title');
  });

    it('should show error message if adding empty task', () => {
    component.addItem('');

    expect(component.errorMessageText).toBe('Task cannot be empty');
  });

  it('should show error message if adding whitespace in the beggining of the string', () => {
    component.addItem('    g');

    expect(component.errorMessageText).toBe('This field cannot be left blank');
  });
});
