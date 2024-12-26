
import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-fax-console',
  standalone: true,
  imports: [
    NgClass
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  templateUrl: './xp-icon-fax-console.component.html',
  styleUrl: './xp-icon-fax-console.component.css'
})
export class XpIconFaxConsoleComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
