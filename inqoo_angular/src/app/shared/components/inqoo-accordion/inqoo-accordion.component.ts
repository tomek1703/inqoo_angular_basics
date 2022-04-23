import {Component, Input} from '@angular/core';
import {InqooAccorrionItem} from "../../models/inqoo-accorrion-item";

@Component({
  selector: 'app-inqoo-accordion',
  templateUrl: './inqoo-accordion.component.html',
  styleUrls: ['./inqoo-accordion.component.scss']
})
export class InqooAccordionComponent {

  @Input() items: InqooAccorrionItem[] = [];

  onItemExpand = (expanded: boolean, index: number) => {
    this.items = this.items.map((item, i) =>
      ({...item, expanded: i === index ? item.expanded = expanded : false}))
  }
}
