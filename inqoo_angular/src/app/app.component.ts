import {Component} from '@angular/core';
import {InqooButtonClickEvent} from "./shared/models/inqoo-button-click-event";
import {InqooAccorrionItem} from "./shared/models/inqoo-accorrion-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inqoo_angular';

  accordionItems: InqooAccorrionItem[] = [
    {label: 'Label 01', content: 'Content 01'},
    {label: 'Label 02', content: 'Content 02'},
    {label: 'Label 03', content: 'Content 03'},
    {label: 'Label 04', content: 'Content 04'}
  ];

  largeSecButtonCounter: number = 0;
  defaultButtonCounter: number = 0;
  smallWarningButtonCounter: number = 0;

  onLargeSecButtonCounter = () => this.largeSecButtonCounter += 1;
  onSmallWarningButtonCounter = () => this.smallWarningButtonCounter += 1;
  onDefaultButtonCustomClick = (event: InqooButtonClickEvent) => this.defaultButtonCounter += 1;
}

