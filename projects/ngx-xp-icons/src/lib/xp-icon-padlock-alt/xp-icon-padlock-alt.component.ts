
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-padlock-alt',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-padlock-alt.component.html',
  styleUrl: './xp-icon-padlock-alt.component.css'
})
export class XpIconPadlockAltComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
