
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-network-drive',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-network-drive.component.html',
  styleUrl: './xp-icon-network-drive.component.css'
})
export class XpIconNetworkDriveComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
