
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-bitmap',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-bitmap.component.html',
  styleUrl: './xp-icon-bitmap.component.css'
})
export class XpIconBitmapComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
