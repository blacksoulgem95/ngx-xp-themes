
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wmp-import-audio-cd',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wmp-import-audio-cd.component.html',
  styleUrl: './xp-icon-wmp-import-audio-cd.component.css'
})
export class XpIconWmpImportAudioCdComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
