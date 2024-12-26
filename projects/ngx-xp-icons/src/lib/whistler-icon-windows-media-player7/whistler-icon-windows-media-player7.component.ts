
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-whistler-windows-media-player7',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './whistler-icon-windows-media-player7.component.html',
  styleUrl: './whistler-icon-windows-media-player7.component.css'
})
export class WhistlerIconWindowsMediaPlayer7Component {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
