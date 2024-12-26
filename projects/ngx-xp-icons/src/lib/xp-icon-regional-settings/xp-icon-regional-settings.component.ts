
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-regional-settings',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-regional-settings.component.html',
  styleUrl: './xp-icon-regional-settings.component.css'
})
export class XpIconRegionalSettingsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
