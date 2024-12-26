
import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'xpi-xpsp2-security-options',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './xpsp2-icon-security-options.component.html',
  styleUrl: './xpsp2-icon-security-options.component.css'
})
export class XpSP2IconSecurityOptionsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
