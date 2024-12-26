
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-windows-media-player10',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-windows-media-player10.component.html',
  styleUrl: './xp-icon-windows-media-player10.component.css'
})
export class XpIconWindowsMediaPlayer10Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
