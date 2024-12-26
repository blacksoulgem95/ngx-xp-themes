
import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xpsp2-search-for-wireless-network',
  standalone: true,
  imports: [
    NgClass
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  templateUrl: './xpsp2-icon-search-for-wireless-network.component.html',
  styleUrl: './xpsp2-icon-search-for-wireless-network.component.css'
})
export class XpSP2IconSearchForWirelessNetworkComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
