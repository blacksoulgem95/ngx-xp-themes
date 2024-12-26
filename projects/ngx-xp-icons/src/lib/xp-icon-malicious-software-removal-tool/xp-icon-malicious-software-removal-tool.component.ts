
import {Component, Input, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-malicious-software-removal-tool',
  standalone: true,
  imports: [
    NgClass
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  templateUrl: './xp-icon-malicious-software-removal-tool.component.html',
  styleUrl: './xp-icon-malicious-software-removal-tool.component.css'
})
export class XpIconMaliciousSoftwareRemovalToolComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
