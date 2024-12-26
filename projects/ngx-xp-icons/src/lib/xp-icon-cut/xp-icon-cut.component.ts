
import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-cut',
  standalone: true,
  imports: [
    NgClass
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  templateUrl: './xp-icon-cut.component.html',
  styleUrl: './xp-icon-cut.component.css'
})
export class XpIconCutComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}