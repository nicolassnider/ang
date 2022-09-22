import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-async',
	templateUrl: './async.component.html',
	styleUrls: ['./async.component.css'],
})
export class AsyncComponent implements OnInit {
	img =this.getImage();
	constructor() {}

	ngOnInit(): void {}

	getImage() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve('https://angular.io/assets/images/logos/angular/angular.png');
			}, 3000);
		});
	}
}
