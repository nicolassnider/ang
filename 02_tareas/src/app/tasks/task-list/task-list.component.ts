import { Component } from '@angular/core';
import { TaskService } from '../services/tasks.service';

@Component({
	selector: 'app-task-list',
	templateUrl: './task-list.component.html',
})
export class TaskListComponent {
	constructor(private tasksService: TaskService) {

	}

	get tasks(){
		return this.tasksService.tasks;
	}

	deleteTask(taskName:string){
		this.tasksService.deleteTask(taskName);
	}

	completeTask(taskName:string){
		this.tasksService.completeTask(taskName);
	}

}
