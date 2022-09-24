import { FormBuilder } from '@angular/forms';
import { FormReactiveComponent } from './form-reactive.component';

describe('FormReactiveComponent', () => {
	let component: FormReactiveComponent;

	beforeEach(() => {
		component = new FormReactiveComponent(new FormBuilder());
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	it('should create a form with 3 inputs, projectR, timeR and stackR', () => {
		const reactiveForm = component.reactiveForm;
		const projectR = reactiveForm.get('projectR');
		const timeR = reactiveForm.get('timeR');
		const stackR = reactiveForm.get('stackR');
		expect(projectR).toBeTruthy();
		expect(timeR).toBeTruthy();
		expect(stackR).toBeTruthy();
	});
	it('should have a projectR input with minLenght of 3 and maxLenght of 15', () => {
		const reactiveForm = component.reactiveForm;
		const projectR = reactiveForm.get('projectR');
		projectR?.setValue('a');
		expect(projectR?.valid).toBeFalsy();
		projectR?.setValue('ab');
		expect(projectR?.valid).toBeFalsy();
		projectR?.setValue('abc');
		expect(projectR?.valid).toBeTruthy();
		projectR?.setValue('abcdefghijklmno');
		expect(projectR?.valid).toBeTruthy();
		projectR?.setValue('abcdefghijklmnop');
		expect(projectR?.valid).toBeFalsy();
	});

	it('should have a timeR input with min of 1 and max of 25', () => {
		const reactiveForm = component.reactiveForm;
		const timeR = reactiveForm.get('timeR');
		timeR?.setValue(-1);
		expect(timeR?.valid).toBeFalsy();
		timeR?.setValue(0);
		expect(timeR?.valid).toBeFalsy();
		timeR?.setValue(1);
		expect(timeR?.valid).toBeTruthy();
		timeR?.setValue(25);
		expect(timeR?.valid).toBeTruthy();
		timeR?.setValue(26);
		expect(timeR?.valid).toBeFalsy();
	});

	it('should have a stackR input with minLenght of 3 and maxLenght of 15', () => {
		const stacksRArray = component.stacksR;
		const stackRControl = component.stackR;
		stackRControl.setValue('a');
		component.addTech();
		expect(stacksRArray?.value.length).toBe(0);
		stackRControl.setValue('angular');
		component.addTech();
		expect(stacksRArray?.value.length).toBe(1);
		stackRControl.setValue('angular12345678901234567890');
		component.addTech();
		expect(stacksRArray?.value.length).toBe(1);
		stackRControl.setValue('.NET');
		component.addTech();
		expect(stacksRArray?.value).toEqual(['angular','.NET']);
	});

	it('should add a project to projects array',()=>{
		const reactiveForm = component.reactiveForm;

		const projectR = reactiveForm.get('projectR');
		const timeR = reactiveForm.get('timeR');

		const stackRControl = component.stackR;

		projectR?.setValue('Agency');
		timeR?.setValue(10);
		stackRControl?.setValue('angular');
		component.addTech();
		stackRControl?.setValue('.NET');
		component.addTech();
		component.addProject();
		expect(component.projects.length).toBe(1);
		expect(component.projects[0]).toEqual({projectR:'Agency',timeR:10,stackR:['angular','.NET']});
	})
});
