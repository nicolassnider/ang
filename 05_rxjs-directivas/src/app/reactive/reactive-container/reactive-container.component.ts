import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, interval, Observable, Subscription } from 'rxjs';
import { take, filter, map } from 'rxjs/operators';

@Component({
	selector: 'app-reactive-container',
	templateUrl: './reactive-container.component.html',
	styleUrls: ['./reactive-container.component.css'],
})
export class ReactiveContainerComponent implements OnInit, OnDestroy {
	subscriptor: Subscription | null = null;
	x: number = 0;
	y: number = 0;
	ngOnInit(): void {
		const obs = fromEvent<MouseEvent>(
			document.querySelector('#area')!,
			'mousemove'
		);
		this.subscriptor = obs.subscribe((ev) => {
			this.x = ev.clientX;
			this.y = ev.clientY;
		});
	}
	ngOnDestroy(): void {this.subscriptor!.unsubscribe();}

	/* miInterval: Observable<number> = interval(1000);

	miSubscription: Subscription |null =null;
	constructor() {}
	ngOnInit(): void {
		this.miSubscription = this.miInterval
			.pipe(
				map((value, i) => value + 1),
				filter((value) => value % 3 === 0),
				take(4)
			)
			.subscribe({
				next: (valor) => console.log('Siguiente: ', valor),
				error: (error) => console.log('Error: ', error),
				complete: () => console.log('Completado'),
			});
	}
	ngOnDestroy(): void {
		console.log('componente destruido');
		this.miSubscription!.unsubscribe();
	} */

	/* constructor() {
		let numero: number = 0;
		const miObservable = new Observable<number>((observer) => {
			setInterval(() => {
				numero++;
				observer.next(numero);
				if (numero === 3) {
					observer.complete();
				}
				if (numero === 5) {
					observer.error('Se ha producido un error');
				}
			}, 3000);
		});
		miObservable.subscribe({
			next: (valor) => console.log('Siguiente: ', valor),
			error: (error) => console.log('Error: ', error),
			complete: () => console.log('Completado'),
		});
	}
 */
}
