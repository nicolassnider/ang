import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-slice',
	templateUrl: './slice.component.html',
	styleUrls: ['./slice.component.css'],
})
export class SliceComponent implements OnInit {
	fruits=['Apple', 'Banana', 'Mango', 'Orange'];
	letters=['abcdefghijklmnopqrstuvwxyz'];
	constructor() {}

	ngOnInit(): void {}
}
