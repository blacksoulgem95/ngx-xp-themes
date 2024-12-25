
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xp-network-hard-disk-disconnected',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xp-icon-network-hard-disk-disconnected.component.html',
  styleUrl: './xp-icon-network-hard-disk-disconnected.component.css'
})
export class XpIconNetworkHardDiskDisconnectedComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
