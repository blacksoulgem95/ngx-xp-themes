
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-information',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-information.component.html',
  styleUrl: './xp-icon-information.component.css'
})
export class XpIconInformationComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
