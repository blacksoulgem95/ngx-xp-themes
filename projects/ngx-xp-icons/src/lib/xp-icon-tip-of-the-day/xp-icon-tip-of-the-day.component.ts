
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-tip-of-the-day',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-tip-of-the-day.component.html',
  styleUrl: './xp-icon-tip-of-the-day.component.css'
})
export class XpIconTipOfTheDayComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
