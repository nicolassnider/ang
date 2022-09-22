/* a pipe that transforms celsius to fahrenheit */
import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureValues } from '../enums/temperature.enum';

@Pipe({
	name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
	transform(value: number, type: TemperatureValues) {
		let conversion = value
		if(type === TemperatureValues.F){
			conversion= value * (9 / 5) + 32;
		}
		console.log(`type = ${type}`)

		return `${conversion}°${type.toString()}`;
	}
}
