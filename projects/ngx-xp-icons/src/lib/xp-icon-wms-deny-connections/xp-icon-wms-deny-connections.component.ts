
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wms-deny-connections',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wms-deny-connections.component.html',
  styleUrl: './xp-icon-wms-deny-connections.component.css'
})
export class XpIconWmsDenyConnectionsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
