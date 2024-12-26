
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xpsp2-security-options',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xpsp2-icon-security-options.component.html',
  styleUrl: './xpsp2-icon-security-options.component.css'
})
export class XpSP2IconSecurityOptionsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
