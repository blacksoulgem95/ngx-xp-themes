
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-disconnect-network-drive',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-disconnect-network-drive.component.html',
  styleUrl: './xp-icon-disconnect-network-drive.component.css'
})
export class XpIconDisconnectNetworkDriveComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
