
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-reply-all',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-reply-all.component.html',
  styleUrl: './xp-icon-oe-reply-all.component.css'
})
export class XpIconOeReplyAllComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
