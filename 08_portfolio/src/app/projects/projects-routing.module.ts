import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppInfoComponent } from './app-info/app-info.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
	{
		path: '',
		component: ProjectsComponent,
	},
	{
		path:'info/:id',
		component:AppInfoComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProjectsRoutingModule {}
