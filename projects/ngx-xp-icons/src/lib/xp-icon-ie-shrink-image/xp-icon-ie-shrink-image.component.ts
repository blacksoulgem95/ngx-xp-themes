
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-ie-shrink-image',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-ie-shrink-image.component.html',
  styleUrl: './xp-icon-ie-shrink-image.component.css'
})
export class XpIconIeShrinkImageComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
