import { Component } from '@angular/core';
import { TaskService } from '../services/tasks.service';

@Component({
	selector: 'app-subtitle',
	templateUrl: './subtitle.component.html',
})
export class SubtitleComponent {
	constructor(private tasksService:TaskService){

	}
	get tasks(){return this.tasksService.tasks.length}
}
