
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-media-center',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-media-center.component.html',
  styleUrl: './xp-icon-media-center.component.css'
})
export class XpIconMediaCenterComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
