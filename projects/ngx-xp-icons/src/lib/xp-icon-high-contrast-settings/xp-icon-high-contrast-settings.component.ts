
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-high-contrast-settings',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-high-contrast-settings.component.html',
  styleUrl: './xp-icon-high-contrast-settings.component.css'
})
export class XpIconHighContrastSettingsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
