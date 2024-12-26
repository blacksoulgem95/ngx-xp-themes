
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wmp-import-playlist',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wmp-import-playlist.component.html',
  styleUrl: './xp-icon-wmp-import-playlist.component.css'
})
export class XpIconWmpImportPlaylistComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
