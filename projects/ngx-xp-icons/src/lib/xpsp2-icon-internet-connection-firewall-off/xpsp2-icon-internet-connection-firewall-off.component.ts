
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xpsp2-internet-connection-firewall-off',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xpsp2-icon-internet-connection-firewall-off.component.html',
  styleUrl: './xpsp2-icon-internet-connection-firewall-off.component.css'
})
export class XpSP2IconInternetConnectionFirewallOffComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
