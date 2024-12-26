
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-network-connections',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-network-connections.component.html',
  styleUrl: './xp-icon-network-connections.component.css'
})
export class XpIconNetworkConnectionsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
