
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-generic-video',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-generic-video.component.html',
  styleUrl: './xp-icon-generic-video.component.css'
})
export class XpIconGenericVideoComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
