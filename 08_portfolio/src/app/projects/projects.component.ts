import { Component, OnInit } from '@angular/core';
import { ProjectsDataService } from './service/projects-data.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
	constructor(private projectsDataService: ProjectsDataService) {

	}

	ngOnInit(): void {}
	get projectsData()
	{
		return this.projectsDataService.data;

	}
	getURI(name:string){
		return encodeURI(name);
	}
}
