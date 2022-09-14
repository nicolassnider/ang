import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { TaskListComponent } from './task-list/task-list.component';
import { GridComponent } from './grid/grid.component';
import { TaskService } from './services/tasks.service';

@NgModule({
	declarations: [SubtitleComponent, TaskListComponent, GridComponent],
	imports: [CommonModule],
	exports: [GridComponent],
	providers: [TaskService],
})
export class TasksModule {}
