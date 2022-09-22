import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-json',
	templateUrl: './json.component.html',
	styleUrls: ['./json.component.css'],
})
export class JsonComponent implements OnInit {
	/* person json object */
	person = {
		name: 'John',
		age: 30,
		occupation: 'Developer',
	};

	constructor() {}

	ngOnInit(): void {}
}
