import { TemperatureValues } from '../enums/temperature.enum';
import { TemperaturePipe } from './temperature.pipe';

describe('TemperaturePipe', () => {
	it('create an instance', () => {
		const pipe = new TemperaturePipe();
		expect(pipe).toBeTruthy();
	});
	it('should return C if param is C', () => {
		const pipe = new TemperaturePipe();
		expect(pipe.transform(11,TemperatureValues.C)).toEqual('11°C');
	});
	it('should return F if param is F', () => {
		const pipe = new TemperaturePipe();
		expect(pipe.transform(11,TemperatureValues.F)).toEqual('51.8°F');
	});
});
