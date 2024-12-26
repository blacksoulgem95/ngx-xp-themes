
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-take-picture',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-take-picture.component.html',
  styleUrl: './xp-icon-take-picture.component.css'
})
export class XpIconTakePictureComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
