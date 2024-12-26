
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-network-connection',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-network-connection.component.html',
  styleUrl: './xp-icon-network-connection.component.css'
})
export class XpIconNetworkConnectionComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
