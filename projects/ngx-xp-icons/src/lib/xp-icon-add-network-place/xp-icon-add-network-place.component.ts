
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-add-network-place',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-add-network-place.component.html',
  styleUrl: './xp-icon-add-network-place.component.css'
})
export class XpIconAddNetworkPlaceComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
