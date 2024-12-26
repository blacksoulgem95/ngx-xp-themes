
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-disable-network-connection',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-disable-network-connection.component.html',
  styleUrl: './xp-icon-disable-network-connection.component.css'
})
export class XpIconDisableNetworkConnectionComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
