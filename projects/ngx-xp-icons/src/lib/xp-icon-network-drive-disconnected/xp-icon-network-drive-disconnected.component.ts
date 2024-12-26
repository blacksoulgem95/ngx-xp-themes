
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-network-drive-disconnected',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-network-drive-disconnected.component.html',
  styleUrl: './xp-icon-network-drive-disconnected.component.css'
})
export class XpIconNetworkDriveDisconnectedComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
