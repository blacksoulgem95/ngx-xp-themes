
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-hearts',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-hearts.component.html',
  styleUrl: './xp-icon-hearts.component.css'
})
export class XpIconHeartsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
