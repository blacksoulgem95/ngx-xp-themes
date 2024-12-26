
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wmp-auto-playlist',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wmp-auto-playlist.component.html',
  styleUrl: './xp-icon-wmp-auto-playlist.component.css'
})
export class XpIconWmpAutoPlaylistComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
