import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-form-template',
	templateUrl: './form-template.component.html',
	styleUrls: ['./form-template.component.css'],
})
export class FormTemplateComponent implements OnInit {
	@ViewChild('formTemplate')
	formTemplate!: NgForm;

	initialState = {
		project: '',
		time: '',
		stack: '',
	};

	projects: Array<any> = [];
	techs: Array<string> = [];

	constructor() {}

	ngOnInit(): void {}
	add() {
		if (this.formTemplate.invalid) return;
		this.projects.push({
			project: this.formTemplate.controls['project'].value,
			time: this.formTemplate.controls['time'].value,
			stack: this.techs,
		});
		this.formTemplate.resetForm();
		this.techs = [];
		console.log(this.projects);
	}
	addTech() {
		if (
			this.formTemplate.controls['stack'].invalid &&
			this.formTemplate.touched
		)
			return;
		this.techs.push(this.formTemplate.controls['stack'].value);
		this.formTemplate.resetForm({
			...this.formTemplate.value,
			stack: '',
		});
		console.log(this.techs);
	}
}
