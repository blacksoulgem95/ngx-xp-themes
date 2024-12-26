
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wms-playlist',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wms-playlist.component.html',
  styleUrl: './xp-icon-wms-playlist.component.css'
})
export class XpIconWmsPlaylistComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
