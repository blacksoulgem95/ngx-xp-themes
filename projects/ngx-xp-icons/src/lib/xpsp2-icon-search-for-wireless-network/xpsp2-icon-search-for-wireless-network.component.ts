
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xpsp2-search-for-wireless-network',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xpsp2-icon-search-for-wireless-network.component.html',
  styleUrl: './xpsp2-icon-search-for-wireless-network.component.css'
})
export class XpSP2IconSearchForWirelessNetworkComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
