
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-network-fax',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-network-fax.component.html',
  styleUrl: './xp-icon-network-fax.component.css'
})
export class XpIconNetworkFaxComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
