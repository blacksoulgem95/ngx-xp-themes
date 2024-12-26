
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wireless-network-connection',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wireless-network-connection.component.html',
  styleUrl: './xp-icon-wireless-network-connection.component.css'
})
export class XpIconWirelessNetworkConnectionComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
