
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-modem',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-modem.component.html',
  styleUrl: './xp-icon-modem.component.css'
})
export class XpIconModemComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
