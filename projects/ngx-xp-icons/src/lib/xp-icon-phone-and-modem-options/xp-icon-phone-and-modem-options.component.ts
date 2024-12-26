
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-phone-and-modem-options',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-phone-and-modem-options.component.html',
  styleUrl: './xp-icon-phone-and-modem-options.component.css'
})
export class XpIconPhoneAndModemOptionsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
