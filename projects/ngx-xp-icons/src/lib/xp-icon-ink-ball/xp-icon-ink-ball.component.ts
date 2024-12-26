
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-ink-ball',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-ink-ball.component.html',
  styleUrl: './xp-icon-ink-ball.component.css'
})
export class XpIconInkBallComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
