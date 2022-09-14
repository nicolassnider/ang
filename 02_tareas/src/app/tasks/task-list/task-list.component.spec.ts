import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskService } from '../services/tasks.service';

import { TaskListComponent } from './task-list.component';

describe('TaskListComponent', () => {
	let component: TaskListComponent;
	let fixture: ComponentFixture<TaskListComponent>;
	let service: TaskService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TaskListComponent],
			providers:[TaskService]
		}).compileComponents();
		service =TestBed.inject(TaskService)
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TaskListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

