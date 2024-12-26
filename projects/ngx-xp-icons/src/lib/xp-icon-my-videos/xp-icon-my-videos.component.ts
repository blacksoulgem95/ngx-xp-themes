
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-my-videos',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-my-videos.component.html',
  styleUrl: './xp-icon-my-videos.component.css'
})
export class XpIconMyVideosComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
