
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-security-settings',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-security-settings.component.html',
  styleUrl: './xp-icon-security-settings.component.css'
})
export class XpIconSecuritySettingsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
