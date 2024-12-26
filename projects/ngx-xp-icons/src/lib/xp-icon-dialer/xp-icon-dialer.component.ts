
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-dialer',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-dialer.component.html',
  styleUrl: './xp-icon-dialer.component.css'
})
export class XpIconDialerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
