
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-generic-audio',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-generic-audio.component.html',
  styleUrl: './xp-icon-generic-audio.component.css'
})
export class XpIconGenericAudioComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
