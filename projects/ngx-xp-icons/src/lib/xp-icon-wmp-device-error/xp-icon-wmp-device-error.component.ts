
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wmp-device-error',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wmp-device-error.component.html',
  styleUrl: './xp-icon-wmp-device-error.component.css'
})
export class XpIconWmpDeviceErrorComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
