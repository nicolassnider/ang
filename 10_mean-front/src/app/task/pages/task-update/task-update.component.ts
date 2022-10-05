import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskCrudService } from 'src/app/services/task-crud.service';

@Component({
	selector: 'app-task-update',
	templateUrl: './task-update.component.html',
	styleUrls: ['./task-update.component.css'],
})
export class TaskUpdateComponent implements OnInit {
	user: any;
	id: string = '';
	tasks: Array<any> = [];
	taskToUpdate: any = {
		name: '',
		description: '',
	};
	taskUpdateForm: FormGroup = this.fb.group({
		taskToUpdateName: [this.taskToUpdate.name, [Validators.required]],
		taskToUpdateDescription: [
			this.taskToUpdate.description,
			[Validators.required, Validators.minLength(6)],
		],
	});

	constructor(
		private crudService: TaskCrudService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private fb: FormBuilder
	) {}

	ngOnInit(): void {
		this.user = this.crudService.user;
		this.crudService.read().subscribe((res) => {
			this.tasks = res.tasks;
		});
		this.activatedRoute.params.subscribe((params) => {
			this.id = params['id'];
		});
		this.crudService.getTaskById(this.id).subscribe((res) => {
			this.taskToUpdate = res.task;
		});
	}
	update() {
		console.log(this.id)
		this.crudService.update(this.taskUpdateForm.value,this.id).subscribe((res) => {
			this.router.navigateByUrl(`/task`);
		});
	}
}
