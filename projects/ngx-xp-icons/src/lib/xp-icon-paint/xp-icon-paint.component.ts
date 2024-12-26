
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-paint',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-paint.component.html',
  styleUrl: './xp-icon-paint.component.css'
})
export class XpIconPaintComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
