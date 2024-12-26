
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-charmap',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-charmap.component.html',
  styleUrl: './xp-icon-charmap.component.css'
})
export class XpIconCharmapComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
