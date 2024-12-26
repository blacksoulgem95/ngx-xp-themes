
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-change-connection-settings',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-change-connection-settings.component.html',
  styleUrl: './xp-icon-change-connection-settings.component.css'
})
export class XpIconChangeConnectionSettingsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
