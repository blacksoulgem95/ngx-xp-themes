
import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xpi-xp-power',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './xp-icon-power.component.html',
  styleUrl: './xp-icon-power.component.css'
})
export class XpIconPowerComponent {
  @Input() width: string = 'auto'
  @Input() height: string = 'auto'
  @Input() classStyle: string = ''

}
