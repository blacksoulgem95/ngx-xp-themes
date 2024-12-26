
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-internet-hearts',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-internet-hearts.component.html',
  styleUrl: './xp-icon-internet-hearts.component.css'
})
export class XpIconInternetHeartsComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
