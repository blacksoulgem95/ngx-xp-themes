
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-security-alert',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-security-alert.component.html',
  styleUrl: './xp-icon-security-alert.component.css'
})
export class XpIconSecurityAlertComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
