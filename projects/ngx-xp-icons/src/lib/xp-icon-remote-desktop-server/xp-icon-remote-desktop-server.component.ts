
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-remote-desktop-server',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-remote-desktop-server.component.html',
  styleUrl: './xp-icon-remote-desktop-server.component.css'
})
export class XpIconRemoteDesktopServerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
