
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-audio-devices',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-audio-devices.component.html',
  styleUrl: './xp-icon-audio-devices.component.css'
})
export class XpIconAudioDevicesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
