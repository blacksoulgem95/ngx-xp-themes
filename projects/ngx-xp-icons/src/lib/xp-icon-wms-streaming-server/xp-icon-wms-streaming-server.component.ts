
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wms-streaming-server',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wms-streaming-server.component.html',
  styleUrl: './xp-icon-wms-streaming-server.component.css'
})
export class XpIconWmsStreamingServerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
