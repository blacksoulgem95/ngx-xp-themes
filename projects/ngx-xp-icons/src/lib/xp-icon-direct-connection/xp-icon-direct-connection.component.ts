
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-direct-connection',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-direct-connection.component.html',
  styleUrl: './xp-icon-direct-connection.component.css'
})
export class XpIconDirectConnectionComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
