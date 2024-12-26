
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-security-ok',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-security-ok.component.html',
  styleUrl: './xp-icon-security-ok.component.css'
})
export class XpIconSecurityOkComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
