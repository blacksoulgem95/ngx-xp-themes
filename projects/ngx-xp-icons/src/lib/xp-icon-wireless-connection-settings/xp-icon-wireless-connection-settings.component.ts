
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-wireless-connection-settings',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-wireless-connection-settings.component.html',
  styleUrl: './xp-icon-wireless-connection-settings.component.css'
})
export class XpIconWirelessConnectionSettingsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
