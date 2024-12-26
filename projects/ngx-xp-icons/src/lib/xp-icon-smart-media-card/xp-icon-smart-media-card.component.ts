
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-smart-media-card',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-smart-media-card.component.html',
  styleUrl: './xp-icon-smart-media-card.component.css'
})
export class XpIconSmartMediaCardComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
