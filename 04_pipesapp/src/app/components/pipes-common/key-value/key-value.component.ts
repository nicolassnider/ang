import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-key-value',
	templateUrl: './key-value.component.html',
	styleUrls: ['./key-value.component.css'],
})
export class KeyValueComponent implements OnInit {
	person = {
		name: 'John',
		age: 30,
		occupation: 'Developer',
	};
	constructor() {}

	ngOnInit(): void {}
}
