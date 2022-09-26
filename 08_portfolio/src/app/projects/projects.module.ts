import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { RouterModule } from '@angular/router';
import { AppInfoComponent } from './app-info/app-info.component';


@NgModule({
	declarations: [ProjectsComponent, AppInfoComponent ],
	imports: [CommonModule, ProjectsRoutingModule, RouterModule],
})
export class ProjectsModule {}
