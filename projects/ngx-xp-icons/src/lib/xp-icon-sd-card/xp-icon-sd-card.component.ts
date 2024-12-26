
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-sd-card',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-sd-card.component.html',
  styleUrl: './xp-icon-sd-card.component.css'
})
export class XpIconSdCardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
