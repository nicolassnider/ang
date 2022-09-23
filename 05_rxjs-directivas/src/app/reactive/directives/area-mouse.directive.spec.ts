import { AreaMouseDirective } from './area-mouse.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveContainerComponent } from '../reactive-container/reactive-container.component';
import { By } from '@angular/platform-browser';

describe('AreaMouseDirective', () => {
	let component = new ReactiveContainerComponent();
	let fixture: ComponentFixture<ReactiveContainerComponent>;

	beforeEach(async () => {
		fixture = await TestBed.configureTestingModule({
			declarations: [ReactiveContainerComponent, AreaMouseDirective],
		}).compileComponents();
		fixture = TestBed.createComponent(ReactiveContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create an instance', () => {
		expect(component).toBeTruthy();
	});
	it('should create a div with background blue and height 80%', () => {
		const element: HTMLDivElement = fixture.debugElement.query(
			By.directive(AreaMouseDirective)
		).nativeElement; //que contenga explicitamente la directiva ThemeDirective
		expect(element.style.backgroundColor).toBe('blue');
		expect(element.style.height).toBe('80%');
	});

});
