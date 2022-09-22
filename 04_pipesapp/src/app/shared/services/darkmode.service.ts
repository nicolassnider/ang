import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class DarkmodeService {
	dark: boolean=false;
	constructor() {}
	changeMode(){
		this.dark=!this.dark;
	}
}
