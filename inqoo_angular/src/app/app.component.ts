import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inqoo_angular';

  routes: { label: string, route: string }[] = [
    {
      label: 'Starships',
      route: ''
    }, {
      label: 'People',
      route: ''
    }, {
      label: 'Components',
      route: ''
    }];
}

