
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-hlp',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-hlp.component.html',
  styleUrl: './xp-icon-hlp.component.css'
})
export class XpIconHlpComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
