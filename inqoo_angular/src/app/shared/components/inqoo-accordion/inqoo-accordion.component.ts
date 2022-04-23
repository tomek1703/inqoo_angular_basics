import {Component, Input} from '@angular/core';
import {InqooAccorrionItem} from "../../models/inqoo-accorrion-item";

@Component({
  selector: 'app-inqoo-accordion',
  templateUrl: './inqoo-accordion.component.html',
  styleUrls: ['./inqoo-accordion.component.scss']
})
export class InqooAccordionComponent {

  @Input() items: InqooAccorrionItem[] = [];

}
