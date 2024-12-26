
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-restricted',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-restricted.component.html',
  styleUrl: './xp-icon-restricted.component.css'
})
export class XpIconRestrictedComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
