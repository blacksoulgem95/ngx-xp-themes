
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-pcmcia-card',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-pcmcia-card.component.html',
  styleUrl: './xp-icon-pcmcia-card.component.css'
})
export class XpIconPcmciaCardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
