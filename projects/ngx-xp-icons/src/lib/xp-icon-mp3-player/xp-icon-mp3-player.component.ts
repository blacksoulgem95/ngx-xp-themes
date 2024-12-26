
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-mp3-player',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-mp3-player.component.html',
  styleUrl: './xp-icon-mp3-player.component.css'
})
export class XpIconMp3PlayerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
