
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wireless-network-setup',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wireless-network-setup.component.html',
  styleUrl: './xp-icon-wireless-network-setup.component.css'
})
export class XpIconWirelessNetworkSetupComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
