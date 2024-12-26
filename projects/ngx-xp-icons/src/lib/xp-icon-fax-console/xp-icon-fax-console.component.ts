
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-fax-console',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-fax-console.component.html',
  styleUrl: './xp-icon-fax-console.component.css'
})
export class XpIconFaxConsoleComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
