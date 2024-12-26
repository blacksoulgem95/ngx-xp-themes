
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-media-center-file',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-media-center-file.component.html',
  styleUrl: './xp-icon-media-center-file.component.css'
})
export class XpIconMediaCenterFileComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
