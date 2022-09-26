import { Injectable } from '@angular/core';
import { projects } from 'src/app/shared/data/Projects.data';

@Injectable({
	providedIn: 'root',
})
export class ProjectsDataService {
	private _data = projects;
	projectData:any={};

	constructor() {}
	get data() {
		return this._data;
	}
	getProject(name: string) {
		const project=this._data.filter((p) => p.name === name);
		return project[0];
	}
}
