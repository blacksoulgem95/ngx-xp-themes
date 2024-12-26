
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-phone-and-modem-options',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-phone-and-modem-options.component.html',
  styleUrl: './xp-icon-phone-and-modem-options.component.css'
})
export class XpIconPhoneAndModemOptionsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
