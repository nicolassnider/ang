import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskService } from '../services/tasks.service';

import { SubtitleComponent } from './subtitle.component';

describe('SubtitleComponent', () => {
	let service: TaskService;
	let component: SubtitleComponent;
	let fixture: ComponentFixture<SubtitleComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SubtitleComponent],
			providers:[TaskService],
		}).compileComponents();

		service = TestBed.inject(TaskService);
		fixture = TestBed.createComponent(SubtitleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render 3 elements on start',()=>{
		const render: HTMLElement = fixture.nativeElement;
		const tasks = render.querySelector('#tasksSubtitle')?.textContent?.trim();
		expect(tasks).toEqual('Tasks: 3');
	})
	it('should decrease by 1 when deleteTask is called',()=>{
		service.deleteTask('Run');
		fixture.detectChanges();

		const render: HTMLElement = fixture.nativeElement;
		const tasks = render.querySelector('#tasksSubtitle')?.textContent?.trim();

		console.log(tasks);
		expect(tasks).toEqual('Tasks: 2');
	})
	it('it should render No available tasks',()=>{
		service.deleteTask('Run');
		service.deleteTask('Work');
		service.deleteTask('Study');
		console.log(service.tasks)
		fixture.detectChanges();
		console.log(service.tasks)

		const render: HTMLElement = fixture.nativeElement;
		const tasks = render.querySelector('#nonetasks')!.textContent!.trim();

		console.log(tasks);
		expect(tasks).toEqual('No available tasks');
	})
});

