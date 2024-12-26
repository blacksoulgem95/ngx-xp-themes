
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-standby',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-standby.component.html',
  styleUrl: './xp-icon-standby.component.css'
})
export class XpIconStandbyComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
