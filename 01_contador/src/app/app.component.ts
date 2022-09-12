import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	styles: [
		`
			h1 {
				color: red;
			}
			', 'h2 {
				color: blue;
			}
		`,
	],
})
export class AppComponent {
	counter: number = 0;
	title: string = 'contador';

	handleCounter(value: number) {
		this.counter = value;
		this.title = 'Contador';
	}
}
