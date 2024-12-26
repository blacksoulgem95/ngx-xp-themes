
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-network-setup',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-network-setup.component.html',
  styleUrl: './xp-icon-network-setup.component.css'
})
export class XpIconNetworkSetupComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
