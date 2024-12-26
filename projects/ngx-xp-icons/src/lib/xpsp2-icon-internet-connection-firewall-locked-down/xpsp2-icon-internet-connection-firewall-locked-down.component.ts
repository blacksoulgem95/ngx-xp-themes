
import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xpsp2-internet-connection-firewall-locked-down',
  standalone: true,
  imports: [
    NgClass
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  templateUrl: './xpsp2-icon-internet-connection-firewall-locked-down.component.html',
  styleUrl: './xpsp2-icon-internet-connection-firewall-locked-down.component.css'
})
export class XpSP2IconInternetConnectionFirewallLockedDownComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
