import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-inqoo-accordion-item',
  templateUrl: './inqoo-accordion-item.component.html',
  styleUrls: ['./inqoo-accordion-item.component.scss']
})
export class InqooAccordionItemComponent{

  @Input() label: string = '';

  expanded: boolean = false;

  onClick = () => this.expanded = !this.expanded;

}
