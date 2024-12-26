
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wms-allow-connections',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wms-allow-connections.component.html',
  styleUrl: './xp-icon-wms-allow-connections.component.css'
})
export class XpIconWmsAllowConnectionsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
