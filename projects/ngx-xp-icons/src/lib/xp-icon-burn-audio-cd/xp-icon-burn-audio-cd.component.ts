
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-burn-audio-cd',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-burn-audio-cd.component.html',
  styleUrl: './xp-icon-burn-audio-cd.component.css'
})
export class XpIconBurnAudioCdComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
