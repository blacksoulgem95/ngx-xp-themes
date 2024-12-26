
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-remote-access-service',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-remote-access-service.component.html',
  styleUrl: './xp-icon-remote-access-service.component.css'
})
export class XpIconRemoteAccessServiceComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
