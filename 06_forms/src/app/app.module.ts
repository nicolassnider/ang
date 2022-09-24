import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormReactiveModule } from './form-reactive/form-reactive.module';
import { FormTemplateModule } from './form-template/form-template.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,FormTemplateModule,FormReactiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
