
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xpsp2-internet-connection-firewall',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xpsp2-icon-internet-connection-firewall.component.html',
  styleUrl: './xpsp2-icon-internet-connection-firewall.component.css'
})
export class XpSP2IconInternetConnectionFirewallComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
