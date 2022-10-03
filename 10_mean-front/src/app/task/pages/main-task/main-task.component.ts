import { Component, OnInit } from '@angular/core';
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
	constructor(private crudService: TaskCrudService,private router:Router) { this.user = this.crudService.user }

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


}
