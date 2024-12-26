
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-windows-media-player9',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-windows-media-player9.component.html',
  styleUrl: './xp-icon-windows-media-player9.component.css'
})
export class XpIconWindowsMediaPlayer9Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
