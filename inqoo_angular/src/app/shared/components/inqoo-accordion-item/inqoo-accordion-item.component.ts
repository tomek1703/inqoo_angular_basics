import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-inqoo-accordion-item',
  templateUrl: './inqoo-accordion-item.component.html',
  styleUrls: ['./inqoo-accordion-item.component.scss']
})
export class InqooAccordionItemComponent{

  @Input() label: string = '';
  @Output() onExpandClick = new EventEmitter<boolean>()

  expanded: boolean = false;

  onClick = () => {
    this.expanded = !this.expanded;
    this.onExpandClick.emit(this.expanded);
  }

}
