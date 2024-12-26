
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xpsp2-wireless-network-connection',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xpsp2-icon-wireless-network-connection.component.html',
  styleUrl: './xpsp2-icon-wireless-network-connection.component.css'
})
export class XpSP2IconWirelessNetworkConnectionComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
