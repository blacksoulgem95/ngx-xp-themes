
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-date-and-time',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-date-and-time.component.html',
  styleUrl: './xp-icon-date-and-time.component.css'
})
export class XpIconDateAndTimeComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
