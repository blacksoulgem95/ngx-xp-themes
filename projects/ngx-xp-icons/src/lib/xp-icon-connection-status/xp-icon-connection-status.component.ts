
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-connection-status',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-connection-status.component.html',
  styleUrl: './xp-icon-connection-status.component.css'
})
export class XpIconConnectionStatusComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
