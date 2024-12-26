
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-additional-settings',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-additional-settings.component.html',
  styleUrl: './xp-icon-additional-settings.component.css'
})
export class XpIconAdditionalSettingsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
