
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-webcam',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-webcam.component.html',
  styleUrl: './xp-icon-webcam.component.css'
})
export class XpIconWebcamComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
