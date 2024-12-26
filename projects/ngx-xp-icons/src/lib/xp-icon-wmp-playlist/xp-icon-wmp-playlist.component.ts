
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wmp-playlist',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wmp-playlist.component.html',
  styleUrl: './xp-icon-wmp-playlist.component.css'
})
export class XpIconWmpPlaylistComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
