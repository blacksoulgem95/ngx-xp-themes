
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-certificate',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-certificate.component.html',
  styleUrl: './xp-icon-certificate.component.css'
})
export class XpIconCertificateComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
