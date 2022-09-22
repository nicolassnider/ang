import { Component } from '@angular/core';
import { DarkmodeService } from './shared/services/darkmode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private darkModeService:DarkmodeService){

  }
  get dark(){
	return this.darkModeService.dark;
  }
}
