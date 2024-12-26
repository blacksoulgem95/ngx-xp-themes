
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-mobile-device',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-mobile-device.component.html',
  styleUrl: './xp-icon-mobile-device.component.css'
})
export class XpIconMobileDeviceComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
