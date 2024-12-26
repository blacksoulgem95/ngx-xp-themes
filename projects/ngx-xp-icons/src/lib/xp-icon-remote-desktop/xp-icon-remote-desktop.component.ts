
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-remote-desktop',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-remote-desktop.component.html',
  styleUrl: './xp-icon-remote-desktop.component.css'
})
export class XpIconRemoteDesktopComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
