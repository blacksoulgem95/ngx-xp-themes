
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-internet-spades',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-internet-spades.component.html',
  styleUrl: './xp-icon-internet-spades.component.css'
})
export class XpIconInternetSpadesComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
