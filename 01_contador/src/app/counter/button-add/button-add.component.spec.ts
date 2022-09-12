import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddComponent } from './button-add.component';

describe('ButtonAddComponent', () => {
	let component: ButtonAddComponent;
	let fixture: ComponentFixture<ButtonAddComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ButtonAddComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ButtonAddComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should initialize counter in 0', () => {
		console.log(component.counter);
		expect(component.counter).toBe(0);
	});

	it('value should be >= 0', () => {
		let newCounter = 0;
		component.onAdd.subscribe((counter) => {
			newCounter=counter;
			console.log(newCounter);
		});
		component.add();
		console.log(newCounter);
		expect(newCounter).toBeGreaterThanOrEqual(0);
	});
});
