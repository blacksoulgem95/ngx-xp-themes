
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-oe-unscramble',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-oe-unscramble.component.html',
  styleUrl: './xp-icon-oe-unscramble.component.css'
})
export class XpIconOeUnscrambleComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
