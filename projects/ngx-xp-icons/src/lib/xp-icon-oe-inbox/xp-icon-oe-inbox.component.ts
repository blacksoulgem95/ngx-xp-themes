
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-inbox',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-inbox.component.html',
  styleUrl: './xp-icon-oe-inbox.component.css'
})
export class XpIconOeInboxComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
