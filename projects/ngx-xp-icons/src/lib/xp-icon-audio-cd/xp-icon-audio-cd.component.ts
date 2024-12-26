
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-audio-cd',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-audio-cd.component.html',
  styleUrl: './xp-icon-audio-cd.component.css'
})
export class XpIconAudioCdComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
