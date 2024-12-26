
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-vpn-connection',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-vpn-connection.component.html',
  styleUrl: './xp-icon-vpn-connection.component.css'
})
export class XpIconVpnConnectionComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
