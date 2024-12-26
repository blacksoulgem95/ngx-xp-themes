
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-dvd-alt',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-dvd-alt.component.html',
  styleUrl: './xp-icon-dvd-alt.component.css'
})
export class XpIconDvdAltComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
