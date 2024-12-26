
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-speech',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-speech.component.html',
  styleUrl: './xp-icon-speech.component.css'
})
export class XpIconSpeechComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
