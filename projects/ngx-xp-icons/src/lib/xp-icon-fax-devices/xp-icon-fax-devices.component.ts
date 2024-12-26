
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-fax-devices',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-fax-devices.component.html',
  styleUrl: './xp-icon-fax-devices.component.css'
})
export class XpIconFaxDevicesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
