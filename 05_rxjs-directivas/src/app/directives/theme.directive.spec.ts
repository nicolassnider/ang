import { ThemeDirective } from './theme.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { By } from '@angular/platform-browser';

describe('ThemeDirective', () => {
	let component = new AppComponent();
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async () => {
		fixture = await TestBed.configureTestingModule({
			declarations: [AppComponent, ThemeDirective],
		}).compileComponents();
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create an instance', () => {
		expect(component).toBeTruthy();
	});
	it('should reate a Div with bgColor #333 and text with color snow', () => {
		const element: HTMLDivElement = fixture.debugElement.query(
			By.directive(ThemeDirective)
		).nativeElement; //que contenga explicitamente la directiva ThemeDirective
		expect(element.style.backgroundColor).toBe('rgb(51, 51, 51)');
		expect(element.style.color).toBe('snow');
	});
});
