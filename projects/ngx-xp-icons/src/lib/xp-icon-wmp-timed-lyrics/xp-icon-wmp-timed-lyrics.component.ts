
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wmp-timed-lyrics',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wmp-timed-lyrics.component.html',
  styleUrl: './xp-icon-wmp-timed-lyrics.component.css'
})
export class XpIconWmpTimedLyricsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
