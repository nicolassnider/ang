import { Injectable } from '@angular/core';
import { Task } from '../interfaces/Task.interface';

@Injectable()
export class TaskService {
	tasks: Array<Task> = [
		{ task: 'Run', done: false },
		{ task: 'Work', done: false },
		{ task: 'Study', done: false },
	];

	deleteTask(taskName: string) {
		this.tasks = this.tasks.filter((task) => task.task !== taskName);
	}
	completeTask(taskName: string) {
		const task: Task = this.tasks.find((task) => {
			return task.task === taskName;
		})!;
		task.done = !task.done;
	}
}
