
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-remote-assistance',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-remote-assistance.component.html',
  styleUrl: './xp-icon-remote-assistance.component.css'
})
export class XpIconRemoteAssistanceComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
