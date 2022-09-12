import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ButtonAddComponent } from './counter/button-add/button-add.component';
import { ButtonDisComponent } from './counter/button-dis/button-dis.component';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AppComponent],
		}).compileComponents();
	});

	it('default showuld be 0', () => {
		const counter = new AppComponent();
		expect(counter.counter).toBe(0);
	});

	it('debe crear componente counter', () => {
		const fixture = TestBed.createComponent(AppComponent);
		expect(fixture.componentInstance).toBeTruthy();
	});

	it('debe crear h1 contador:0', () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled: HTMLElement = fixture.nativeElement;
		expect(compiled.querySelector('h1')?.textContent).toEqual(
			`Contador: 0`
		);
	});
	xit('debe crear h1 contador:1', () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled: HTMLElement = fixture.nativeElement;
		expect(compiled.querySelector('h1')?.textContent).toEqual(
			`Contador: 0`
		);
	});
});

//describe integration test
describe('Integration test', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				ButtonAddComponent,
				ButtonDisComponent,
			],
		}).compileComponents();
	});
	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('click  event', () => {
		const compiled:HTMLElement= fixture.nativeElement;
		const counterValue = compiled.querySelector('h1')!;
		const btnAdd:HTMLElement=fixture.debugElement.nativeElement.querySelector('#add');
		btnAdd.click();
		fixture.detectChanges();
		expect(counterValue?.textContent).toEqual('Contador: 1');


	});
	it('click dis event', () => {
		const compiled:HTMLElement= fixture.nativeElement;
		const counterValue = compiled.querySelector('h1')!;
		const btnDis:HTMLElement=fixture.debugElement.nativeElement.querySelector('#dis');
		btnDis.click();
		fixture.detectChanges();
		expect(counterValue?.textContent).toEqual('Contador: 0');
	})
});
