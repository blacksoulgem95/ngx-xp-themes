
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-portable-media-devices',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-portable-media-devices.component.html',
  styleUrl: './xp-icon-portable-media-devices.component.css'
})
export class XpIconPortableMediaDevicesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
