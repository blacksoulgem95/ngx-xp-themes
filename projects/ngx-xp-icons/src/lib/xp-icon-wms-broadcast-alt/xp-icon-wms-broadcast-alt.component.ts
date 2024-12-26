
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wms-broadcast-alt',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wms-broadcast-alt.component.html',
  styleUrl: './xp-icon-wms-broadcast-alt.component.css'
})
export class XpIconWmsBroadcastAltComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
