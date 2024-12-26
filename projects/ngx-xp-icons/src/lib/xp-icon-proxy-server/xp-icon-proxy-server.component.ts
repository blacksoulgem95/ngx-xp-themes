
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-proxy-server',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-proxy-server.component.html',
  styleUrl: './xp-icon-proxy-server.component.css'
})
export class XpIconProxyServerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
