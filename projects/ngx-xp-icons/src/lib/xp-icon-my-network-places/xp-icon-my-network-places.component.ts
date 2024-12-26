
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-my-network-places',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-my-network-places.component.html',
  styleUrl: './xp-icon-my-network-places.component.css'
})
export class XpIconMyNetworkPlacesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
