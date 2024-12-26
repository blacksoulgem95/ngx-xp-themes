
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-padlock',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-padlock.component.html',
  styleUrl: './xp-icon-padlock.component.css'
})
export class XpIconPadlockComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
