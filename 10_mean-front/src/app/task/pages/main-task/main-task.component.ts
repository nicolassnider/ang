import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskCrudService } from 'src/app/services/task-crud.service';

@Component({
	selector: 'app-main-task',
	templateUrl: './main-task.component.html',
	styleUrls: ['./main-task.component.css']
})
export class MainTaskComponent implements OnInit {
	user: any;
	tasks: Array<any> = [];
	taskCreateForm: FormGroup = this.fb.group({
		newTaskName: ['', [Validators.required]],
		newTaskDescription: ['', [Validators.required, Validators.minLength(6)]],
	});
	constructor(private crudService: TaskCrudService,private router:Router,private fb:FormBuilder) { this.user = this.crudService.user }

	ngOnInit(): void {
		this.user = this.crudService.user;
		this.crudService.read().subscribe(res => { this.tasks = res.tasks });
	}
	logout(){
		localStorage.clear();
		this.router.navigateByUrl('/auth');
	}
	delete(id:string){
		this.crudService.delete(id).subscribe(res=>{
			this.crudService.read().subscribe(res=>{
				this.tasks=res.tasks;
			})
		})
	}
	create(){
		this.crudService.create(this.taskCreateForm.value).subscribe(res=>{
			this.crudService.read().subscribe(res=>{
				this.tasks=res.tasks;
			})
		})
	}


}
