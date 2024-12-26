
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-system-information',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-system-information.component.html',
  styleUrl: './xp-icon-system-information.component.css'
})
export class XpIconSystemInformationComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
