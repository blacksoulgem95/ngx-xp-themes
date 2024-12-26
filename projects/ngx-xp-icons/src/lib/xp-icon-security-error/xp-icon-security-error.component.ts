
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-security-error',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-security-error.component.html',
  styleUrl: './xp-icon-security-error.component.css'
})
export class XpIconSecurityErrorComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
