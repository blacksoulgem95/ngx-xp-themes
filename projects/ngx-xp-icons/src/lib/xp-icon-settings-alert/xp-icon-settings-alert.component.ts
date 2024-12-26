
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-settings-alert',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-settings-alert.component.html',
  styleUrl: './xp-icon-settings-alert.component.css'
})
export class XpIconSettingsAlertComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
