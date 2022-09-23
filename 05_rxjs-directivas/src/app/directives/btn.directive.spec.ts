import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { BtnDirective } from './btn.directive';

describe('BtnDirective', () => {
	let component = new AppComponent();
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async () => {
		fixture = await TestBed.configureTestingModule({
			declarations: [AppComponent, BtnDirective],
		}).compileComponents();
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create an instance', () => {
		expect(component).toBeTruthy();
	});
	it('should create a button with background red and text color snow and width 100%', () => {
		const element: HTMLButtonElement = fixture.debugElement.query(
			By.directive(BtnDirective)
		).nativeElement; //que contenga explicitamente la directiva ThemeDirective
		expect(element.style.backgroundColor).toBe('purple');
		expect(element.style.color).toBe('snow');
		expect(element.style.width).toBe('100%');
	})
});
