import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'darkmode',
})
export class DarkModePipe implements PipeTransform {
	transform(value: boolean): any {
		return value? 'bg-dark text-light': 'bg-light text-dark';
	}
}
