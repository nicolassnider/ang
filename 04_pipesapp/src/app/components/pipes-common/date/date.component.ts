import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-date',
	templateUrl: './date.component.html',
	styleUrls: ['./date.component.css'],
})
export class DateComponent implements OnInit {
	//new variable testDate as a new Date
	date = new Date();
	nowDate = Date.now();
	constructor() {}

	ngOnInit(): void {}
}
