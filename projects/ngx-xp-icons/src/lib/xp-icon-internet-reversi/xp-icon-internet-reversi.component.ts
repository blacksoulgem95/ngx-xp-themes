
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-internet-reversi',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-internet-reversi.component.html',
  styleUrl: './xp-icon-internet-reversi.component.css'
})
export class XpIconInternetReversiComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
