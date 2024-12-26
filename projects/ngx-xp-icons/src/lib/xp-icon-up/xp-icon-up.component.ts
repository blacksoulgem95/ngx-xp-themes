
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-up',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-up.component.html',
  styleUrl: './xp-icon-up.component.css'
})
export class XpIconUpComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
