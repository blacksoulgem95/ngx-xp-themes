
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-firewall',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-firewall.component.html',
  styleUrl: './xp-icon-firewall.component.css'
})
export class XpIconFirewallComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
