import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-number',
	templateUrl: './number.component.html',
	styleUrls: ['./number.component.css'],
})
export class NumberComponent implements OnInit {
	calification: number = 7.1234567890123456789;
	percentage:number = 0.36;
	constructor() {}

	ngOnInit(): void {}
}
