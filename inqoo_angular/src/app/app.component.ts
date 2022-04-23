import { Component } from '@angular/core';
import {InqooButtonClickEvent} from "./shared/models/inqoo-button-click-event";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inqoo_angular';

  largeSecButtonCounter: number = 0;
  defaultButtonCounter: number = 0;
  smallWarningButtonCounter: number = 0;

  onLargeSecButtonCounter = () => this.largeSecButtonCounter += 1;
  onSmallWarningButtonCounter = () => this.smallWarningButtonCounter += 1;
  onDefaultButtonCustomClick = (event: InqooButtonClickEvent) => this.defaultButtonCounter += 1;
}

