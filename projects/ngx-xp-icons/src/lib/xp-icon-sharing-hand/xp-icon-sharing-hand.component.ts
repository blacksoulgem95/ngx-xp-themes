
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-sharing-hand',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-sharing-hand.component.html',
  styleUrl: './xp-icon-sharing-hand.component.css'
})
export class XpIconSharingHandComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
