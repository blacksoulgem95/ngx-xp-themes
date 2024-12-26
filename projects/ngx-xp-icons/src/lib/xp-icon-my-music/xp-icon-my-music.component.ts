
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-my-music',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-my-music.component.html',
  styleUrl: './xp-icon-my-music.component.css'
})
export class XpIconMyMusicComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
