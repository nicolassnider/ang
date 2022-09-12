import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonDisComponent } from './button-dis/button-dis.component';

@NgModule({
  declarations: [ButtonDisComponent, ButtonAddComponent],
  imports: [CommonModule],
  exports: [ButtonDisComponent, ButtonAddComponent],
})
export class CounterModule {}
