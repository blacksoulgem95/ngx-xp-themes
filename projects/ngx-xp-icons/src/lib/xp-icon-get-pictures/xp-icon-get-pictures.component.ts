
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-get-pictures',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-get-pictures.component.html',
  styleUrl: './xp-icon-get-pictures.component.css'
})
export class XpIconGetPicturesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
