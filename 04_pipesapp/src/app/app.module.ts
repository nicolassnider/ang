import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesCommonModule } from './components/pipes-common/pipes-common.module';
import { PipesCustomModule } from './components/pipes-custom/pipes-custom.module';
import { DarkModePipe } from './shared/pipes/dark-mode.pipe';

@NgModule({
  declarations: [
    AppComponent,DarkModePipe
  ],
  imports: [
    BrowserModule,PipesCommonModule,PipesCustomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
