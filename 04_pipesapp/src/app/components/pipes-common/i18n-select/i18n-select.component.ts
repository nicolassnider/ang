import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-i18n-select',
	templateUrl: './i18n-select.component.html',
	styleUrls: ['./i18n-select.component.css'],
})
export class I18nSelectComponent implements OnInit {
	gender = 'z';
	messages = { m: 'Bienvenido Usuario', f: 'Bienvenida Usuaria', other: 'Bienvenidx Usuarix' };
	constructor() {}

	ngOnInit(): void {}
}
