import { Component, OnInit } from '@angular/core';
import {
	FormArray,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';

@Component({
	selector: 'app-form-reactive',
	templateUrl: './form-reactive.component.html',
	styleUrls: ['./form-reactive.component.css'],
})
export class FormReactiveComponent implements OnInit {
	reactiveForm: FormGroup = this.fb.group({
		projectR: this.fb.control('', [
			Validators.required,
			Validators.minLength(3),
			Validators.maxLength(15),
		]),
		timeR: this.fb.control(1, [
			Validators.required,
			Validators.min(1),
			Validators.max(25),
		]),
		stackR: this.fb.array([]),
	});

	stackR: FormControl = this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]);

	projects: any[]=[];

	get stacksR() {
		return this.reactiveForm.get('stackR') as FormArray;
	}

	constructor(private fb: FormBuilder) {}

	addProject() {
		if(this.reactiveForm.invalid){
			this.reactiveForm.markAllAsTouched();
			return;
		}
		this.projects.push(this.reactiveForm.value);
		this.reactiveForm.reset();
		this.stacksR.clear();

	}

	validate() {
		return this.reactiveForm.invalid && this.reactiveForm.touched;
	}

	addTech() {
		if (this.stackR.invalid) {
			this.reactiveForm.markAllAsTouched();
			return;
		}
		this.stacksR.push(this.fb.control(this.stackR.value));
		this.stackR.reset();
		console.log(this.stacksR.value);
	}

	ngOnInit(): void {}
}
