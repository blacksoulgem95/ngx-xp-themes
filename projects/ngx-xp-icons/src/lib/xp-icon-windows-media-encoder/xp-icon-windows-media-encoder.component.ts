
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-windows-media-encoder',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-windows-media-encoder.component.html',
  styleUrl: './xp-icon-windows-media-encoder.component.css'
})
export class XpIconWindowsMediaEncoderComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
