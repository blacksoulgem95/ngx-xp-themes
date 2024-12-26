
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-windows-media-encoder',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-windows-media-encoder.component.html',
  styleUrl: './xp-icon-windows-media-encoder.component.css'
})
export class XpIconWindowsMediaEncoderComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
