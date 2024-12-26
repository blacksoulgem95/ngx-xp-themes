
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-recipients',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-recipients.component.html',
  styleUrl: './xp-icon-oe-recipients.component.css'
})
export class XpIconOeRecipientsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
