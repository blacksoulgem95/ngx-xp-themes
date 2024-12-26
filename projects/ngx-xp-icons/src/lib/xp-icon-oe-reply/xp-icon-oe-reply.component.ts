
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-reply',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-reply.component.html',
  styleUrl: './xp-icon-oe-reply.component.css'
})
export class XpIconOeReplyComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
