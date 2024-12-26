
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-new-imaging-device',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-new-imaging-device.component.html',
  styleUrl: './xp-icon-new-imaging-device.component.css'
})
export class XpIconNewImagingDeviceComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
