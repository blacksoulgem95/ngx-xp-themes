
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-critical',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-critical.component.html',
  styleUrl: './xp-icon-critical.component.css'
})
export class XpIconCriticalComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
