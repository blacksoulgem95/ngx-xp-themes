
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-wme-capture-audio-or-video',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-wme-capture-audio-or-video.component.html',
  styleUrl: './xp-icon-wme-capture-audio-or-video.component.css'
})
export class XpIconWmeCaptureAudioOrVideoComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
