import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[appAreaMouse]',
})
export class AreaMouseDirective implements OnInit {
	constructor(private el: ElementRef<HTMLDivElement>) {}

	@Input()
	color: string='green';
	@Input()
	height: string='green';

	ngOnInit() {
		console.log('directiva areamouse')
		this.setBackground();
		this.setHeight();
	}
	setBackground() {

		this.el.nativeElement.style.backgroundColor = this.color;
	}
	setHeight() {
		this.el.nativeElement.style.height = `${this.height}%`;
	}
}
