
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-mark-as-unread',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-mark-as-unread.component.html',
  styleUrl: './xp-icon-oe-mark-as-unread.component.css'
})
export class XpIconOeMarkAsUnreadComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
