
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-send',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-send.component.html',
  styleUrl: './xp-icon-oe-send.component.css'
})
export class XpIconOeSendComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
