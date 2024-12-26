
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-pinball',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-pinball.component.html',
  styleUrl: './xp-icon-pinball.component.css'
})
export class XpIconPinballComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
