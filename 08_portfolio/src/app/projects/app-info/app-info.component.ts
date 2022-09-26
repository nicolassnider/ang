import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsDataService } from '../service/projects-data.service';

@Component({
	selector: 'app-app-info',
	templateUrl: './app-info.component.html',
	styleUrls: ['./app-info.component.css'],
})
export class AppInfoComponent implements OnInit {
	param: string = '';
	projectData:any={};
	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private projectsDataService: ProjectsDataService
	) {
		let id = '';
		activatedRoute.params.subscribe(({ id: projectName }) => {
			id = decodeURI(projectName);
		});
		this.param = decodeURI(id);
	}

	ngOnInit(): void {
		this.projectData = this.projectsDataService.getProject(this.param);
	}

	backToProjects() {
		this.router.navigate(['/projects']);
	}
}
