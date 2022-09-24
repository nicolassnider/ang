import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateComponent } from './form-template.component';
import { FormsModule } from '@angular/forms';

describe('FormTemplateComponent', () => {
	let component: FormTemplateComponent;
	let fixture: ComponentFixture<FormTemplateComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FormTemplateComponent],imports: [FormsModule]
		}).compileComponents();

		fixture = TestBed.createComponent(FormTemplateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
