
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-tour-xp',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-tour-xp.component.html',
  styleUrl: './xp-icon-tour-xp.component.css'
})
export class XpIconTourXpComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
