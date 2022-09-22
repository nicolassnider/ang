import { Component, OnInit } from '@angular/core';
import { TemperatureValues } from 'src/app/shared/enums/temperature.enum';
import { DarkmodeService } from 'src/app/shared/services/darkmode.service';


@Component({
	selector: 'app-custom-container',
	templateUrl: './custom-container.component.html',
	styleUrls: ['./custom-container.component.css'],
})
export class CustomContainerComponent implements OnInit {

	degrees:number=12;
	type:TemperatureValues=TemperatureValues.C;

	constructor(private darkModeService:DarkmodeService) {}

	ngOnInit(): void {}
	get dark(){
		return this.darkModeService.dark;
	}
	changeMode(){
		this.darkModeService.changeMode();
	}
}
