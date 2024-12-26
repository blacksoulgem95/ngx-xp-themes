
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-send-and-receive',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-send-and-receive.component.html',
  styleUrl: './xp-icon-oe-send-and-receive.component.css'
})
export class XpIconOeSendAndReceiveComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
