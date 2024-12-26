
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xpsp2-search-for-wireless-network',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xpsp2-icon-search-for-wireless-network.component.html',
  styleUrl: './xpsp2-icon-search-for-wireless-network.component.css'
})
export class XpSP2IconSearchForWirelessNetworkComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
