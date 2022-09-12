import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-dis',
  templateUrl: './button-dis.component.html',
  styleUrls: ['./button-dis.component.css'],
})
export class ButtonDisComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() counter: number = 0;
  @Output() onDis: EventEmitter<number> = new EventEmitter();
  dis() {
    this.counter>0?this.counter--:this.counter=0;
    this.onDis.emit(this.counter);
  }
}
