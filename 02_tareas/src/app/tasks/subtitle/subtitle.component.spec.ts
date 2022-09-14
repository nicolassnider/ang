import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskService } from '../services/tasks.service';

import { SubtitleComponent } from './subtitle.component';

describe('SubtitleComponent', () => {
	let component: SubtitleComponent;
	let fixture: ComponentFixture<SubtitleComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SubtitleComponent],
			providers:[TaskService],
		}).compileComponents();

		fixture = TestBed.createComponent(SubtitleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

