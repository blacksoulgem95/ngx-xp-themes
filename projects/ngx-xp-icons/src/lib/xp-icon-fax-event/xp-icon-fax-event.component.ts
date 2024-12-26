
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-fax-event',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-fax-event.component.html',
  styleUrl: './xp-icon-fax-event.component.css'
})
export class XpIconFaxEventComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
