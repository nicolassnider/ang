import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-i18n-plural',
	templateUrl: './i18n-plural.component.html',
	styleUrls: ['./i18n-plural.component.css'],
})
export class I18nPluralComponent implements OnInit {
	notifications = 0;
	message={
		"=0": "dont have notifications",
		"=1": "have one notification",
		"other": "have # notifications"
	}
	constructor() {}

	ngOnInit(): void {}

	addNotification(){
		this.notifications++;
	}
}
