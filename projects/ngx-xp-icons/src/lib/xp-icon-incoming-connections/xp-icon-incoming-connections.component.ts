
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-incoming-connections',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-incoming-connections.component.html',
  styleUrl: './xp-icon-incoming-connections.component.css'
})
export class XpIconIncomingConnectionsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
