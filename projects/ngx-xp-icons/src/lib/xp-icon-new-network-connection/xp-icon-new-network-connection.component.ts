
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-new-network-connection',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-new-network-connection.component.html',
  styleUrl: './xp-icon-new-network-connection.component.css'
})
export class XpIconNewNetworkConnectionComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
