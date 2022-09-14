import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SubtitleComponent } from './tasks/subtitle/subtitle.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
