
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-sent-items',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-sent-items.component.html',
  styleUrl: './xp-icon-oe-sent-items.component.css'
})
export class XpIconOeSentItemsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
