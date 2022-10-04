import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  swipesData: Array<string> = [];

  onSwipe(evt) {
    switch (evt.direction) {
      case 2:
        this.swipesData.unshift('Left');
        break;

      case 4:
        this.swipesData.unshift('Right');
        break;
    }
  }
}
