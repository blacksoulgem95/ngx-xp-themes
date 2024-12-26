
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-windows-media-connect',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-windows-media-connect.component.html',
  styleUrl: './xp-icon-windows-media-connect.component.css'
})
export class XpIconWindowsMediaConnectComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
