
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-security-center',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-security-center.component.html',
  styleUrl: './xp-icon-security-center.component.css'
})
export class XpIconSecurityCenterComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
