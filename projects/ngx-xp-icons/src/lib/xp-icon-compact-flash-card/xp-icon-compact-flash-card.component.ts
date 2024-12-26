
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-compact-flash-card',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-compact-flash-card.component.html',
  styleUrl: './xp-icon-compact-flash-card.component.css'
})
export class XpIconCompactFlashCardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
